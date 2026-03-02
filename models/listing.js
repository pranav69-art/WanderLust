const mongoose = require('mongoose');
const review = require('./review');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,   },
    description: { type: String },
image : { 
    type: String,
    __filename: String,
    default: "https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png",
    set: (v) =>
        v === "" ? "https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png" : v
},
    price: { type: Number },
    location: { type: String },
    country : { type: String },});
    review : [ {
    type : Schema.Types.ObjectId,
    ref : "Review",
}];
    

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;