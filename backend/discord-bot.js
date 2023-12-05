//Handles Discord Bot related interactions
import { Client, GatewayIntentBits } from "discord.js";
import config from "config";
import { GuildBot, validateGuildBot } from "./models/guild-bot.js";
import WebSocket from "ws";

const client = new Client({
  //creating discord client to interact with bot api
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

//starts and deals with Discord Bot related actions
export function startDiscordBot() {
  const wss = new WebSocket.Server({ port: 8082 }); //creating websocket server

  //when websocket gets or loses a connection from a client, it logs it
  wss.on("connection", (ws) => {
    console.log("New WebSocket client connected");

    ws.on("close", () => {
      console.log("WebSocket client disconnected");
    });
  });

  //when bot is online, logs client user tag
  client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  //handles command interactions
  client.on("interactionCreate", async (interaction) => {
    try {
      if (interaction.isCommand()) {
        const commandName = interaction.commandName.toLowerCase(); // Get the command name
        const guildId = interaction.guild.id;

        // Fetch commands for the specific guild from the database
        const guildBot = await GuildBot.findOne({ gId: guildId });
        const command = guildBot.cmds.find((cmd) => cmd.name === commandName);

        console.log("Interaction Create:", command);
        if (command) {
          // Loop and perform actions
          for (const action of command.actions) {
            console.log("Action:", action);
            switch (action.effect) {
              case "Reply to Slash Command": //can only reply once but will continue to loop
                await interaction.reply({
                  content: action.message,
                  ephemeral: action.privateReply,
                });
                break;
              default: // placeholder command response
                await interaction.reply(
                  `Found command: ${command.name} - ${command.description}`
                );
                break;
            }
          }
        } else {
          // Command not found or not configured
          await interaction.reply("Command not recognized.");
        }
      }
    } catch (err) {
      console.error("Error handling interaction:", err);
    }
  });

  // Perform actions when the bot joins a server
  client.on("guildCreate", async (guild) => {
    console.log(`Joined a new server: ${guild.name}`);

    try {
      // Check if guildBot already exists in database
      let existingGuildBot = await GuildBot.findOne({ gId: guild.id });

      if (!existingGuildBot) {
        // if GuildBot doesn't exist, create new entry
        const newGuildBot = new GuildBot({
          gId: guild.id,
          cmds: [], // Start with empty array of commands
        });

        // Save new GuildBot to database
        await newGuildBot.save();

        console.log(`GuildBot added for guild ID: ${guild.id}`);
      } else {
        console.log(`GuildBot for guild ID ${guild.id} already exists.`);
      }
    } catch (error) {
      console.error("Error while adding GuildBot:", error);
    }

    // Sending Message, can later be trigger
    setTimeout(() => {
      const channel = guild.systemChannel; // Get default channel of the guild
      if (channel) {
        channel.send("Hello! I am a bot from DiscordBotLabs!");
      } else {
        console.log("Unable to find system channel.");
      }
    }, 5000); // Wait 5 seconds before attempting to send message

    // Send message via WebSocket to clients
    //NOT VERY EFFICIENT, but can enhance later
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ gid: guild.id, message: "Bot Joined!" }));
      }
    });
  });

  // Removes bot from db entries
  client.on("guildDelete", async (guild) => {
    console.log(`Left server: ${guild.name}`);

    try {
      // Find and delete the GuildBot associated with the guild ID
      const deletedGuildBot = await GuildBot.findOneAndDelete({
        gId: guild.id,
      });

      if (deletedGuildBot) {
        console.log(`GuildBot removed for guild ID: ${guild.id}`);
      } else {
        console.log(`No GuildBot found for guild ID: ${guild.id}`);
      }

      // Other actions after removing the GuildBot from the database, if needed
    } catch (error) {
      console.error("Error while removing GuildBot:", error);
    }
  });

  const token = config.get("discordBotToken"); // Get your Discord bot token from config
  client.login(token).catch((err) => {
    console.error(`Error logging into Discord: ${err.message}`);
  });
}

// creates slash command for a specific guild
export async function createSlashCommand(guildId, name, desc) {
  try {
    const guild = await client.guilds.fetch(guildId); // Fetch the guild using the guildId
    if (!guild) {
      //logs error and returns null if failed to fetch guild
      console.error("Guild not found");
      return null;
    }

    //creates command for specific guild
    const createdCommand = await guild.commands.create({
      name: name,
      description: desc,
    });
    return createdCommand;
  } catch (error) {
    //logs error if error in creating slash command
    console.error("Error creating command:", error);
    return null;
  }
}

//removes slash command for certain guild
export async function deleteSlashCommand(guildId, name) {
  try {
    const guild = await client.guilds.fetch(guildId);
    if (!guild) {
      // Logs error and returns null if failed to fetch guild
      console.error("Guild not found");
      return null;
    }

    const commands = await guild.commands.fetch();
    const commandToDelete = commands.find((command) => command.name === name);
    if (!commandToDelete) {
      // If the command is not found, log an error and return null
      console.error("Command not found");
      return null;
    }
    // Delete the command
    await guild.commands.delete(commandToDelete);
    return commandToDelete;
  } catch (error) {
    // Log error if there's an issue in deleting the slash command
    console.error("Error deleting command:", error);
    return null;
  }
}
