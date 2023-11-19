import config from "config";
import express from "express"; // Express.js framework
const router = express.Router(); // create an Express router

router.post("/deploy-bot", async (req, res) => {
  // deploy bot here, I believe you can get the guildId by using req.body.gId
});

router.get("/check-deployed", async (req, res) => {
  // check if the bot is deployed and in server, and return if so
});

// returns bot invite to server link
router.get("/bot-invite", async (req, res) => {
  const botInvite = config.get("botInvite");
  const guildId = req.query.gId;
  try {
    // Look for the index of the first '&' after the initial '?'
    const index = botInvite.indexOf('&', botInvite.indexOf('?') + 1);

    if (index !== -1) {
      // Insert guild_id parameter after the first '&' found in the URL
      const updatedInvite = botInvite.slice(0, index) + `&guild_id=${guildId}` + botInvite.slice(index);
      res.send(updatedInvite);
    } else {
      // If there's no '&' after the initial '?', append guild_id parameter
      const updatedInvite = botInvite + `&guild_id=${guildId}`;
      res.send(updatedInvite);
    }
  } catch {
    // Guild ID missing
    res.send(guildId);
    //res.status(400).send("Guild ID is required");
  }
});

// returns user authentication link
router.get("/login", async (req, res) => {
  res.send(config.get("discordLoginLink"));
});

export default router;
