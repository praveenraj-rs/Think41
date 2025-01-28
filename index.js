const express = require("express");
const app = express();
const path = require("path");

const cors = require("cors");
const corsOptions = require("./config/corsOptions");

// Connecting DB
const mongoose = require("mongoose");
const connectDB = require("./config/dbConnect");
connectDB();

const PORT = process.env.PORT;

// Built-in middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // public access

// Checking Connection
app.get("/", (req, res) => {
  res.send("Praveenraj R S");
});

// Portfolio showcase from public dir
app.get("/portfolio", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Enabling cross origin resource sharing
app.use(cors(corsOptions));
app.use("/switch", require("./routes/switch"));

mongoose.connection.once("open", () => {
  console.log("Successfully connected to mongodb");
  app.listen(PORT, () => console.log(`Server running on port  ${PORT}`));
});
