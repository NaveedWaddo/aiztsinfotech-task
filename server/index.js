import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./database/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  console.log("server is running");
});

app.listen(5000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDb();
});
