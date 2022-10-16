const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const mongoose = require("mongoose");

// Create a Product
router.post("/", async (req, res) => {
  try {
    const product = new Product({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      brand: req.body.brand,
      price: req.body.price,
      rating: req.body.rating,
    });
    const result = await product.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      error: "Internal Server Error >> ",
    });
    console.log(error);
  }
});

// Get Products
router.get("/", async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({
      error: "Internal Server Error >> ",
    });
    console.log(error);
  }
});

// Find By Product id
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({
      error: "Internal Server Error >> ",
    });
    console.log(error);
  }
});

// Update product
router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          brand: req.body.brand,
          price: req.body.price,
          rating: req.body.rating,
        },
      }
    );
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({
      error: "Internal Server Error >> ",
    });
    console.log(error);
  }
});

// Delete Product
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.deleteOne({ _id: req.params.id });
    res.status(200).json({
      message: "Product Deleted",
      result: product,
    });
  } catch (error) {
    res.status(400).json({
      error: "Internal Server Error >> ",
    });
    console.log(error);
  }
});

module.exports = router;
