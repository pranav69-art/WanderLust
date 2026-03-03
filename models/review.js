const { compile } = require("ejs");
const mongoose = require("mongoose");
const { create } = require("./listing");
const schema = mongoose.Schema;

const reviewSchema = new schema({
    comment : String,
    rating : {
        type : Number,
min : 1,
max : 5,
},
    listing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Listing"
  },
createdAt : {
    type : Date,
    default : Date.now(),
},


});


module.exports = mongoose.model("Review" , reviewSchema);
