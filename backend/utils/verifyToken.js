import jwt from "jsonwebtoken";

// Verify token only
export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not authenticated",
    });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({
        success: false,
        message: "Token invalid",
      });
    }

    req.userId = user.id;     // 🔥 IMPORTANT
    req.role = user.role;
    next();
  });
};

// For routes that just need login (like review, booking)
export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next);
};

// Admin only
export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.role === "admin") {
      next();
    } else {
      return res.status(403).json({
        success: false,
        message: "Admin only",
      });
    }
  });
};
