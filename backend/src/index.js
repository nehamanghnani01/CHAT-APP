// const express = require("express");
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

import express from "express"; //used type ='module' in package.json
import authRoutes from "./routes/auth.routes.js";
import { connectDB } from "./lib/db.js";

const app = express();
app.use(express.json()); //allow to extract JSON data from request body
app.use(cookieParser()); //allow to extract cookies from request headers

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
