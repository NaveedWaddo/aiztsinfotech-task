import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./database/db.js";

dotenv.config();

const app = express();

//using middleware
app.use(express.json());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  console.log("server is running");
});

import userRoutes from "./routes/user.js";
import courseRoutes from "./routes/course.js";
import adminRoutes from "./routes/admin.js";

app.use("/api", userRoutes);
app.use("/api", courseRoutes);
app.use("/api", adminRoutes);

app.listen(5000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDb();
});
