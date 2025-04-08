import { Router } from "express";
import {
  getUser,
  loginUser,
  logoutUser,
  signupUser,
} from "../controllers/auth.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

const authRoutes = Router();

authRoutes.post("/signup", signupUser);
authRoutes.post("/login", loginUser);
authRoutes.post("/logout", logoutUser);

authRoutes.get("/get-user", isAuthenticated, getUser);

export default authRoutes;
