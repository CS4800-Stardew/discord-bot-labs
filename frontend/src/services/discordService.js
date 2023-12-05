import http from "./httpService"; // 'service' for making API requests

const apiEndpoint = "/discord-info"; // endpoint for discord-info

// login via Discord link
export async function getDiscordLoginLink() {
  const response = await http.get(apiEndpoint + "/login");
  return response.data;
}

// invite bot to server link
export async function getBotInvite(guildId) {
  const response = await http.get(apiEndpoint + "/bot-invite", {
    params: { gId: guildId },
  });
  return response.data;
}

// check if specific guildId has a bot deployed and in the server
export async function checkBotDeployed(guildsInfo) {
  const response = await http.get(apiEndpoint + "/check-deployed", {
    params: { guildsInfo: guildsInfo },
  });
  return response;
}

// gets cmds array data from db
export async function getCommands(guildId) {
  const response = await http.get(apiEndpoint + "/get-commands", {
    params: { gId: guildId },
  });
  return response.data;
}

// saves/overwrites cmds array to db
export function saveCommands(guildId, commands) {
  return http.patch(apiEndpoint + "/save-commands", {
    gId: guildId,
    cmds: commands,
  });
}

//deploys slashcommand to bot
export function deployCommand(guildId, commandName, description) {
  return http.patch(apiEndpoint + "/deploy-command", {
    gId: guildId,
    name: commandName,
    desc: description,
  });
}

//deactivates slashcommand from bot
export function deactivateCommand(guildId, commandName) {
  return http.patch(apiEndpoint + "/deactivate-command", {
    gId: guildId,
    name: commandName,
  });
}

//set guildInfo into local storage
export function setActiveGuildData(guildInfo) {
  localStorage.setItem("gInfo", guildInfo);
}

//get guildInfo from local storage
export function getActiveGuildData() {
  return localStorage.getItem("gInfo");
}

//remove guildInfo from local storage
export function removeActiveGuildData() {
  localStorage.removeItem("gInfo");
}

export default {
  getDiscordLoginLink,
  getBotInvite,
  checkBotDeployed,
  getCommands,
  saveCommands,
  deployCommand,
  deactivateCommand,
  setActiveGuildData,
  getActiveGuildData,
  removeActiveGuildData,
};
