const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/User");

// Create User
router.post("/", async (req, res) => {
  try {
    const user = await new User({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      phone: req.body.phone,
      pan: req.body.pan,
      userType: req.body.userType,
    });
    const result = await user.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      error: "Internal Server Error >> ",
    });
    console.log(error);
  }
});

// Get user
router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      error: "Internal Server Error >> ",
    });
    console.log(error);
  }
});

//Get User By I'd
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      error: "Internal Server Error >> ",
    });
    console.log(error);
  }
});

// Update user
router.put("/:id", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          password: req.body.password,
          email: req.body.email,
          phone: req.body.phone,
          pan: req.body.pan,
          userType: req.body.userType,
        },
      }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      error: "Internal Server Error >> ",
    });
    console.log(error);
  }
});

// Delete User
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.deleteOne({ _id: req.params.id });
    res.status(200).json({
      message: "User Deleted",
      result: user,
    });
  } catch (error) {
    res.status(400).json({
      error: "Internal Server Error >> ",
    });
    console.log(error);
  }
});

module.exports = router;
