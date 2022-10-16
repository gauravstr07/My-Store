const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  brand: String,
  price: String,
  rating: String,
});

module.exports = mongoose.model("Product", productSchema);
