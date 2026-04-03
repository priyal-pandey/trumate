const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// -------------------------
// Create Post
// -------------------------
router.post("/", async (req, res) => {
  try {
    const { userId, ...postData } = req.body;

    const newPost = new Post({
      ...postData,
      user: userId
    });

    const savedPost = await newPost.save();
    res.json(savedPost);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// -------------------------
// Get All ACTIVE Posts
// -------------------------
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find({ status: "available" })
      .populate("user") // includes name, email, phone, age, gender, college
      .sort({ createdAt: -1 });

    res.json(posts);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// -------------------------
// Get Past Listings (Completed Posts)
// -------------------------
router.get("/history/:userId", async (req, res) => {
  try {
    const posts = await Post.find({
      user: req.params.userId,
      status: "completed"
    })
      .populate("user")
      .sort({ createdAt: -1 });

    res.json(posts);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// -------------------------
// Complete Post 
// -------------------------
router.put("/:id/complete", async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        status: "completed"
      },
      { new: true }
    )
      .populate("user");

    res.json(updatedPost);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// -------------------------
// Get Single Post
// -------------------------
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate("user");

    res.json(post);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;