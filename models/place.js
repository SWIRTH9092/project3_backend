//-------------------------------------------
// Import Dependencies
//-------------------------------------------
const mongoose = require("./connection")

//-------------------------------------------
// Define Place Model
//-------------------------------------------
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make user schema
const placeSchema = new Schema({
    title: {type: String},
    category: {type: String},
    url: {type: String}
});

// make Place model
const Place = model("Place", placeSchema);

//-------------------------------------------
// Export Place Model
//-------------------------------------------
module.exports = Place
