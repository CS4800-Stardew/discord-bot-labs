import http from "./httpService"; // 'service' for making API requests

const apiEndpoint = "/discord-info"; // endpoint for discord-info

// login via Discord link
export async function getDiscordLoginLink() {
  const response = await http.get(apiEndpoint + "/login");
  return response.data;
}

// invite bot to server link
export async function getBotInvite(guildId) {
  const response = await http.get(apiEndpoint + "/bot-invite", { params: { gId: guildId } });
  return response.data;
}

// deploy bot sending guildId
export async function deployBot(guildId) {
  const response = await http.post(apiEndpoint + "/deploy-bot", {gId: guildId});
  return response;
}

// check if specific guildId has a bot deployed and in the server
export async function checkBotDeployed(guildId) {
  const response = await http.get(apiEndpoint + "/check-deployed", { params: { gId: guildId } });
  return response;
}

export default {
  getDiscordLoginLink,
  getBotInvite,
  deployBot,
  checkBotDeployed
};
