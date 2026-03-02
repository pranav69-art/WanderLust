const mongoose = require("mongoose");
require("dotenv").config();
const initdata = require("./data");
const Listing = require("../models/listing");
require("dotenv").config({ path: "../.env" });


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initdata.data);
    console.log("✅ Data Initialized Successfully");
}

initDB()