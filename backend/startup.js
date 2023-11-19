import cors from "cors";
import express from "express";
import config from "config";
import Joi from "joi";
import joiObjectId from "joi-objectid";
import error from "./middleware/error.js";
import mongoose from "mongoose";

//route imports
import auth from "./routes/auth.js";
import users from "./routes/users.js";
import buildBot from "./routes/build-bot.js";
import discordInfo from "./routes/discord-Info.js";

// enables CORS for allowing cross-origin HTTP requests
// enables communication between different domains
export function enableCors(app) {
  app.use(cors());
}

// sets up routes for Express
export function setRoutes(app) {
  app.use(express.json());
  app.use("/api/auth", auth);
  app.use("/api/users", users);
  app.use("/api/build-bot", buildBot);
  app.use("/api/discord-info", discordInfo);
  app.use(error);
}

// connecting to the MongoDB database
export function connectToDatabase() {
  const db = config.get("db"); // Get database connection string from config
  mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Connected to ${db}...`))
    .catch((err) => {
      console.error(`Database connection error: ${err.message}`);
    });
}

// checking if jwtPrivateKey is in the config settings, throw error if not
// key needed for generating and verifying JWTs for user authentication
export function validateConfig() {
  if (!config.get("jwtPrivateKey")) {
    throw new Error("FATAL ERROR: jwtPrivateKey is not defined.");
  }
}

//adds support for validating MongoDB ObjectIDs for Joi
export function extendJoiValidation() {
  Joi.objectId = joiObjectId(Joi);
}
