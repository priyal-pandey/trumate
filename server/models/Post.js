const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    rent: {
      type: Number,
      required: true,
    },
    roomType: {
      type: String,
      enum: ["Private", "Shared"],
      required: true,
    },
    lifestyle: String,
    preferences: String,
    description: String,

    status: {
      type: String,
      enum: ["available", "completed"],
      default: "available",
    },

    selectedUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  },
  { timestamps: true } // gives createdAt = date posted
);

module.exports = mongoose.model("Post", postSchema);