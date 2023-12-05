// defines Mongoose schema and model for bot data specific to a guilld, as well as validation functions
import Joi from "joi"; // library for data validation
import mongoose from "mongoose"; // library for defining schemas and models

// Mongoose schema for bot data specific to a guilld
const guildBotSchema = new mongoose.Schema({
  gId: {
    type: Number,
    required: true,
    unique: true,
  },
  cmds: {
    type: Array,
    required: true,
  },
});

// creating Mongoose model named 'guildBot' using the 'guildBotSchema'
const GuildBot = mongoose.model("guildBot", guildBotSchema);

// validation function for user objects using Joi
function validateGuildBot(guildBot) {
  const schema = Joi.object({
    gId: Joi.number().unsafe().required(),
    cmds: Joi.array().required(),
  });

  return schema.validate(guildBot);
}

export { GuildBot, validateGuildBot };
