import express from "express";
import { login, signup, logout } from "../controllers/auth.controllers.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { updateProfile, checkAuth } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile); //to update profile, user must be authenticated

router.get("/check", protectRoute, checkAuth);

export default router;
