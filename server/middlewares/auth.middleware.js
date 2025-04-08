import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
export const isAuthenticated = async (req, res, next) => {
  try {
    if (req.user) {
      return next();
    }

    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!decodedToken) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const user = await User.findById(decodedToken.userId).select("-password");

    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({
      success: false,
      message: "Interval server error: isAuthenticated",
    });
  }
};
