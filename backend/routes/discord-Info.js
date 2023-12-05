//Handles Discord related api calls
import config from "config";
import express from "express"; // Express.js framework
import { GuildBot, validateGuildBot } from "../models/guild-bot.js";
import { createSlashCommand, deleteSlashCommand } from "../discord-bot.js";
const router = express.Router(); // create an Express router

//returns cmds array from db
router.get("/get-commands", async (req, res) => {
  try {
    const guildId = req.query.gId;
    const guildInfo = await GuildBot.findOne({ gId: guildId });
    res.send(guildInfo.cmds);
  } catch (error) {
    console.error("Error getting commands:", error);
    res.status(500).send("Internal Server Error");
  }
});

//saves/overwrites cmds array into db
router.patch("/save-commands", async (req, res) => {
  try {
    const { gId, cmds } = req.body;
    const { error } = validateGuildBot(req.body);
    //console.log("error: " + error);
    if (error) return res.status(400).send(error.details[0].message);

    //console.log("gid: " + gId);
    //console.log("cmds: ", cmds);

    //Find GuildBot document by guildId and update its commands
    const updatedGuild = await GuildBot.findOneAndUpdate(
      { gId: gId },
      { $set: { cmds: cmds } },
      { new: true }
    );

    if (!updatedGuild) {
      return res.status(404).send("GuildBot not found");
    }

    res.send(updatedGuild);
  } catch (error) {
    console.error("Error saving commands:", error);
    res.status(500).send("Internal Server Error");
  }
});

//deploy command onto bot
//current issue is that if backend is restarted, all deployed bots are now not deployed anymore
//should fix later via discord-bot.js with client.on(ready)
router.patch("/deploy-command", async (req, res) => {
  const { gId, name, desc } = req.body;
  console.log("Command Deployed: ", gId, name, desc);
  try {
    createSlashCommand(gId, name, desc);
  } catch (error) {
    console.error(error.message);
    res.send(error);
  }
});

//deactivates commands from bot
router.patch("/deactivate-command", async (req, res) => {
  const { gId, name } = req.body;
  try {
    const deleted = deleteSlashCommand(gId, name);
    res.send(deleted);
  } catch (error) {
    res.send(error);
  }
});

//returns array of booleans of whether those guilds are deployed or not
router.get("/check-deployed", async (req, res) => {
  try {
    const guildsInfo = JSON.parse(req.query.guildsInfo); // Array of guild data

    const guildStatusArray = await Promise.all(
      guildsInfo.map(async (guildInfo) => {
        const existingGuildBot = await GuildBot.findOne({ gId: guildInfo.id });

        return !!existingGuildBot; // true if guild exists, false otherwise
      })
    );
    res.send(guildStatusArray);
  } catch (error) {
    console.error("Error checking deployed guilds:", error);
    res.status(500).send("Internal Server Error");
  }
});

// returns bot invite to server link
router.get("/bot-invite", async (req, res) => {
  const botInvite = config.get("discordBotInvite");
  const guildId = req.query.gId;
  try {
    // Look for the index of the first '&' after the initial '?'
    const index = botInvite.indexOf("&", botInvite.indexOf("?") + 1);

    if (index !== -1) {
      // Insert guild_id parameter after the first '&' found in the URL
      const updatedInvite =
        botInvite.slice(0, index) +
        `&guild_id=${guildId}` +
        botInvite.slice(index);
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
