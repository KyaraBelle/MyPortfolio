//import express from "express";
//var express = require("express");
//var app = express();
import dotenv from "dotenv";
dotenv.config();

//MongoDB connection
import mongoose from "mongoose";
mongoose.connect(process.env.MONGO_URI,)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB connection error:", err));

//import express app
import app from "./server/express.js";

import router from "./server/assets-router.js";
import projectRouter from "./server/routes/project-route.js";
import contactRouter from "./server/routes/contact-route.js";
import educationRouter from "./server/routes/education-route.js";
import userRouter from "./server/routes/user-route.js";

//middleware
app.use("/src", router);

//api routes
app.use("/api", projectRouter);
app.use("/api", contactRouter);
app.use("/api", educationRouter);
app.use("/api", userRouter);


//welcome route (last)
app.use("/", function (req, res) {
 res.send("Welcome to User application");
});

// Start the server
app.listen(3000);
console.log("Server running at http://localhost:3000/");
//module.exports = app;

export default app;
