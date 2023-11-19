import config from "config";
import express from "express"; // Express.js framework
const router = express.Router(); // create an Express router

// Handle Discord OAuth callback and update authentication status
router.get("/callback", async (req, res) => {
  try {
    res.send(req + "Authentication successful! You can close this window.");
  } catch (error) {
    res.send("Authentication failed. Please try again.");
  }
});

// handle user authentication
router.get("/login", async (req, res) => {
  res.send(config.get("discordLoginLink"));
});

export default router;
