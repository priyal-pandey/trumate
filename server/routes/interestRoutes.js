const express = require("express");
const router = express.Router();
const Interest = require("../models/Interest");
const Post = require("../models/Post");

// Get users interested in MY posts
router.get("/post-owner/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    // ✅ Only get AVAILABLE posts
    const posts = await Post.find({
      user: userId,
      status: "available"
    });

    const postIds = posts.map(post => post._id);

    const interests = await Interest.find({
      post: { $in: postIds }
    })
      .populate("user") // full user details
      .populate("post", "title");

    res.json(interests);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get interests for a specific post
router.get("/post/:postId", async (req, res) => {
  try {
    const interests = await Interest.find({ post: req.params.postId })
      .populate("user"); // full user details

    res.json(interests);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create interest
router.post("/", async (req, res) => {
  try {
    const { userId, postId } = req.body;

    if (!userId || !postId) {
      return res.status(400).json({ error: "userId and postId are required" });
    }

    const existing = await Interest.findOne({ user: userId, post: postId });
    if (existing) {
      return res.status(409).json({ message: "Already interested" });
    }

    const interest = new Interest({
      user: userId,
      post: postId
    });

    await interest.save();

    res.json({ message: "Interest saved" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;