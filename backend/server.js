const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const complaintRoutes = require("./routes/complaintRoutes");
app.use("/api/complaints", complaintRoutes);
const aiRoutes = require("./routes/aiRoutes");
app.use("/api/ai", aiRoutes);
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));