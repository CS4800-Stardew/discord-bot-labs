import http from "./httpService"; // 'service' for making API requests

const apiEndpoint = "/discord-info"; // endpoint for user registration

// register new user
export async function getDiscordLoginLink() {
  const response = await http.get(apiEndpoint + "/login");
  return response;
}

export default {
  getDiscordLoginLink,
};
