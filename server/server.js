import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import { connectDB } from "./config/dbConnect.js";

const app = express();

dotenv.config();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.use("/api/auth", authRoutes);
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
  connectDB();
});
