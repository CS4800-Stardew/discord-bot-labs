import config from "config";
import express from "express";
import * as startup from "./startup.js"; // Import all functions from the 'startup' module
import * as dsb from "./discord-bot.js"; // Discord Bot handling
const app = express(); // Creating instance of Express application

startup.enableCors(app);
startup.setRoutes(app);
startup.connectToDatabase();
startup.validateConfig();
startup.extendJoiValidation();
dsb.startDiscordBot();

// Start Express server on port 5000
app.listen(5000, () => console.log("app is running"));
