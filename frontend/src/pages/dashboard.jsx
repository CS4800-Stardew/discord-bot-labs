import React, { useEffect, useState, useRef } from "react";

import ds from "../services/discordService";
import auth from "../services/authService";
import Card from "./components/common/card";
import "./dashboard.css";

const Dashboard = () => {
  const [guildsInfo, setGuildsInfo] = useState([]); //stores user's guilds info.

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

        // If response is an array, update state with the guild info
        if (Array.isArray(response)) {
          setGuildsInfo(response);
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
  const handleClick = async (guildInfo) => {
    const response = await ds.getBotInvite(guildInfo.id);
    window.open(response);
    ds.deployBot(guildInfo.id);

    //Will be moved to a polling part later, but it is here for now
    window.location = "/bot-builder";
  };

  return (
    <div className="dashboard-wrapper">
      <h1 className="server-list-title">Your Servers</h1>
      <div className="guild-card-wrapper">
        {guildsInfo.map((guildInfo) => (
          <Card
            key={guildInfo.id}
            img={`https://cdn.discordapp.com/icons/${guildInfo.id}/${guildInfo.icon}.png`}
            title={guildInfo.name}
            btntxt={"Add Bot to Server"}
            onClick={() => handleClick(guildInfo)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
