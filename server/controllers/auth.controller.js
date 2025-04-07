import { generateTokenAndSetCookie } from "../lib/utils.js";
import { User } from "../models/user.model.js";

export const signupUser = async (req, res) => {
  const { email, name, password } = req.body;

  if (!(email && name && password)) {
    res.status(400).json("All inputs are required");
  }

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json("User already exists");
    }

    const newUser = new User({
      email,
      name,
      password,
    });

    if (newUser) {
      await newUser.save();
      generateTokenAndSetCookie(res, newUser._id);

      return res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "User not created",
      });
    }
  } catch (error) {
    console.log("Erron in signing up", error.message);
    res.status(500).json({
      success: false,
      message: "Internal Error: Signing up",
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    res.status(400).json("All inputs are required");
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    } else {
      generateTokenAndSetCookie(res, user._id);

      return res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    }
  } catch (error) {}
};

export const logoutUser = (req, res) => {
  try {
    res.cookie("jwt", "", {
      maxAge: 0,
    });

    return res.status(200).json({
      message: "User logged out successfully",
    });
  } catch (error) {
    console.log("Erron in Loging out", error.message);
    res.status(500).json({
      success: false,
      message: "Internal Error: Logining out",
    });
  }
};
