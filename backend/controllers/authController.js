import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// REGISTER
export const register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();
    res.status(200).json({ success: true, message: "Registration successful" });

  } catch (err) {
    res.status(500).json({ success: false, message: "Registration failed" });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(404).json({ success: false, message: "User not found" });

    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid)
      return res.status(401).json({ success: false, message: "Incorrect password" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    const { password, ...rest } = user._doc;

    res
      .cookie("accessToken", token, {
        httpOnly: true,
        secure: true,          // ✅ REQUIRED on HTTPS
        sameSite: "none",      // ✅ REQUIRED for Netlify → Render
        maxAge: 15 * 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        success: true,
        message: "Login successful",
        data: rest,
      });

  } catch (err) {
    res.status(500).json({ success: false, message: "Login failed" });
  }
};

// CHECK AUTH (called on refresh)
export const checkAuth = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    res.json({ success: true, user });
  } catch {
    res.json({ success: false });
  }
};
