const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Listing = require("./models/listing");
const path = require("path");
const app = express();
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const Review = require("./models/review.js");
const { ClerkExpressRequireAuth } = require("@clerk/clerk-sdk-node");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const fileUpload = require("express-fileupload");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { isLoggedIN } = require("./utils/middleware");
const OpenAI = require("openai");

// Middleware
app.use(express.json());



//  view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));
// static assets should typically come from public
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

app.use(methodOverride("_method"));
// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });

// Welcome page Route


app.get("/", (req, res) => {
  res.render("./listings/welcome.ejs");
});
 


app.get("/index", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/");
  }
  res.render("index");

});
app.get("/index", ClerkExpressRequireAuth(), (req, res) => {
  res.render("index");
});


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// index route to render listings
app.get("/listings", async (req, res) => {
    const listings = await Listing.find({});
    // pass 'listings' to match the variable used in the template
    res.render("listings/index.ejs", { listings });
});
//NEW Route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
}); 

    
    // show route to render individual listing details
app.get("/listings/:id", async (req, res) => {
 let { id } = req.params;
 const listing = await Listing.findById(id);
 res.render("listings/show.ejs", { listing });
}   );
 // create route to handle form submission and save new listing to database
app.post("/listings", async (req, res , next) => {
    try {   const { title, description, price , location , country } = req.body;
    const newListing = new Listing({ title, description, price ,location , country  });
    if (req.files && req.files.image) {
      newListing.image = req.files.image.name;
    }
    await newListing.save();
    res.redirect("/listings"); } catch (err) {
        next(err); // Pass the error to the error-handling middleware
    }
   
}); 

app.get("/listings/:id/edit", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
});

app.put("/listings/:id", async (req, res,next) => {
    let { id } = req.params;
    const { title, description, price , location , country } = req.body;
    try {
        await Listing.findByIdAndUpdate(id, { title, description, price , location , country });
        res.redirect(`/listings/${id}`);
    } catch (err) {
        next(err);
    }
});


// Delete route
app.delete("/listings/:id", async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
});

//review route
app.post("/listings/:id/reviews", async (req, res) => {
  const listing = await Listing.findById(req.params.id);

  const review = new Review({
    rating: req.body.rating,
    comment: req.body.comment
  });

  listing.reviews.push(review);
  await review.save();
  await listing.save();

  res.redirect(`/listings/${req.params.id}`);
});

//sign in and sign up routes will be handled by Clerk, so we don't need to define them here. The Clerk SDK will take care of rendering the appropriate UI and handling authentication.
app.get("/dashboard",
  ClerkExpressRequireAuth(),
  (req, res) => {
    res.send("Protected Dashboard");
});

//post image route
app.post("/upload", async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }

    let sampleFile = req.files.sampleFile;

    let uploadPath = __dirname + "/uploads/" + sampleFile.name;

    // Move file to uploads folder
    sampleFile.mv(uploadPath, function (err) {
      if (err) {
        return res.status(500).send(err);
      }

      res.send("File uploaded successfully!");
    });

  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

//image upload route
app.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  } else {
    res.send(`File ${req.file.originalname} uploaded successfully.`);
  }
});


model: "gpt-4.1-mini"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful resort booking assistant." },
        { role: "user", content: userMessage },
      ],
    });

    res.json({
      reply: response.choices[0].message.content,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Something went wrong." });
  }

});



