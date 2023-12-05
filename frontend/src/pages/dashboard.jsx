import React, { useEffect, useState, useRef } from "react";

import ds from "../services/discordService";
import auth from "../services/authService";
import Card from "./components/common/card";
import configData from "../dbl-config.json";
import "./dashboard.css";

const Dashboard = () => {
  const [guildsInfo, setGuildsInfo] = useState([]); //stores user's guilds info.
  const [guildDeployed, setGuildDeployed] = useState([]); //stores guildsInfo deployed status
  const [joinConfirm, setJoinConfirm] = useState(false); //join confirmation popup state

  // fetches user's guild info from discord on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // retrieve Discord access token and token type from auth service
        const { accessToken, tokenType } = auth.getDiscordToken();

        // Redirect to the login page if the access token is missing.
        if (!accessToken) {
          window.location = "/login";
        }

        // fetch user guilds from Discord API using tokens
        const guilds = await fetch("https://discord.com/api/users/@me/guilds", {
          headers: {
            authorization: `${tokenType} ${accessToken}`,
          },
        });

        // parse JSON response from API
        const response = await guilds.json();

        // Check if user is the owner or has ADMINISTRATOR permissions
        const isAdminOrOwner = (permissions) => {
          const ADMINISTRATOR_FLAG = 8;

          return (permissions & ADMINISTRATOR_FLAG) === ADMINISTRATOR_FLAG;
        };

        // If response is array, update state with the guild info
        if (Array.isArray(response)) {
          //filter guilds to only those the user has rights to add a bot
          const filteredGuilds = response.filter(
            (guild) => guild.owner || isAdminOrOwner(guild.permissions)
          );
          setGuildsInfo(filteredGuilds);

          const checkDeployed = await ds.checkBotDeployed(
            JSON.stringify(filteredGuilds)
          );
          setGuildDeployed(checkDeployed.data);
        } else {
          // Log error if response is not array
          console.error("Invalid guilds response: " + response);
        }
      } catch (error) {
        // logs any errors from fetch operation
        console.error(error);
      }
    };

    fetchData(); // Call fetchData function when component mounts
  }, []);

  // event handler for clicking on a guild card
  const handleClick = async (guildInfo, index) => {
    if (guildDeployed[index]) {
      ds.setActiveGuildData(JSON.stringify(guildInfo));
      window.location = "/bot-builder";
    } else {
      const response = await ds.getBotInvite(guildInfo.id);
      window.open(response);

      //Connects to websocket and sends to botbuilder if recieving message that bot has entered server
      //Change this link later
      const ws = new WebSocket(configData.webSocketURL); // Connect to the WebSocket server
      ws.onopen = () => {
        console.log("Connected to WebSocket server");
      };
      ws.onmessage = (event) => {
        // when gid message recived, redirect to botbuilder
        const message = JSON.parse(event.data);
        if (message.gid === guildInfo.id) {
          ds.setActiveGuildData(JSON.stringify(guildInfo));
          window.location = "/bot-builder";
        }
      };
    }
  };

  return (
    <div className="dashboard-wrapper">
      <h1 className="server-list-title">Your Servers</h1>
      <div className="guild-card-wrapper">
        {guildsInfo.map((guildInfo, index) => (
          <Card
            key={guildInfo.id}
            img={`https://cdn.discordapp.com/icons/${guildInfo.id}/${guildInfo.icon}.png`}
            title={guildInfo.name}
            btntxt={
              guildDeployed[index] == false
                ? "Add Bot to Server"
                : "Go To BotBuilder"
            }
            onClick={() => handleClick(guildInfo, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
