import express from "express";
import { login, register, checkAuth } from "../controllers/authController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/check-auth", verifyToken, checkAuth);

export default router;
