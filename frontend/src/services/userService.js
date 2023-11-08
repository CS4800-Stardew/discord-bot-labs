// handles user registration by making POST request to backend

import http from "./httpService"; // 'service' for making API requests

const apiEndpoint = "/users"; // endpoint for user registration

// register new user
export function register(user) {
  // make POST request to 'apiEndpoint' with user's registration data
  return http.post(apiEndpoint, {
    email: user.email,
    username: user.username,
    password: user.password,
  });
}
