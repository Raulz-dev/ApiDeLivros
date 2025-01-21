const express = require("express");
const router = express.Router();
const authController = require("./controllers/authController");
const { ensureAuth } = require("./middleware/authMiddleware");

router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);

router.get("/teste", ensureAuth, (req, res) => res.json({ message: "ok" }));

module.exports = router;
