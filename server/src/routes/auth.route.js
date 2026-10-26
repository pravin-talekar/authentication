const express = require("express");
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();

// POST: /api/auth/register
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.post("/logout", authController.logoutUser);

router.get("/me", authMiddleware.authMiddleware, authController.getCurrentUser);

module.exports = router;