import http from "./httpService"; // 'service' for making API requests

const apiEndpoint = "/build-bot"; // endpoint for user registration

export async function createBot(jsonList) {
  const {} = await http.post(apiEndpoint, { jsonList });
}

export default {
  createBot,
};
