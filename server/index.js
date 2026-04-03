require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
if (!process.env.MONGO_URI) {
  console.error("MONGO_URI is not defined in .env");
}

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// routes
const postRoutes = require("./routes/postRoutes");
const authRoutes = require("./routes/authRoutes");
const interestRoutes = require("./routes/interestRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/interests", interestRoutes);

// test route
app.get("/api", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});