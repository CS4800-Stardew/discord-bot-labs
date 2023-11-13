import React, { useEffect, useState, useRef } from "react";
import auth from "../services/authService";

/*Temporary Test Page */
const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    discriminator: "",
    avatar: "",
    id: "",
  });

  const nameRef = useRef();
  const avatarRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { accessToken, tokenType } = auth.getDiscordToken();

        if (!accessToken) {
          window.location = "/";
        }

        const guilds = await fetch("https://discord.com/api/users/@me/guilds", {
          headers: {
            authorization: `${tokenType} ${accessToken}`,
          },
        });

        const result = await fetch("https://discord.com/api/users/@me", {
          headers: {
            authorization: `${tokenType} ${accessToken}`,
          },
        });
        const response = await result.json();
        const response2 = await guilds.json();
        console.log(response);
        console.log(response2);

        const { username, discriminator, avatar, id } = response;

        // set state with user info
        setUserInfo({
          username,
          discriminator,
          avatar,
          id,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // useEffect runs once on component mount

  useEffect(() => {
    // Use refs to update DOM elements
    if (nameRef.current && avatarRef.current) {
      nameRef.current.innerText = ` ${userInfo.username}#${userInfo.discriminator}`;
      avatarRef.current.src = `https://cdn.discordapp.com/avatars/${userInfo.id}/${userInfo.avatar}.jpg`;
    }
  }, [userInfo]); // useEffect runs whenever userInfo changes

  return (
    <div className="flex items-center justify-center h-screen bg-discord-gray text-white flex-col">
      <div className="text-2xl">Welcome to the dashboard,</div>
      <div className="text-4xl mt-3 flex items-center font-medium">
        <img
          src=""
          id="avatar"
          className="rounded-full w-12 h-12 mr-3"
          alt="User Avatar"
          ref={avatarRef}
        />
        <div id="name" ref={nameRef}></div>
      </div>
      <a href="/" className="text-sm mt-5">
        Logout
      </a>
    </div>
  );
};

export default Dashboard;
