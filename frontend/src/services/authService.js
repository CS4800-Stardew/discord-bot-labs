// handles user authentication using Discord Tokens
// provides functions for logging in, logging out, and managing Discord Tokens

const accessToken = "accessToken"; // key used to store the accessToken in local storage
const tokenType = "tokenType"; // key used to store tokenType in local storage

// log in a user with DiscordToken which is broken up into token type and access token
export function loginWithDiscord(tt, at) {
  // store the token pieces in local storage
  localStorage.setItem(tokenType, tt);
  localStorage.setItem(accessToken, at);
}

// log out user by removing token pieces from local storage
export function logout() {
  localStorage.removeItem(tokenType);
  localStorage.removeItem(accessToken);
}

// get current user from accessToken stored in local storage
export function verifyToken() {
  try {
    const tt = localStorage.getItem(tokenType);
    return tt;
  } catch (ex) {
    // If exception occurs during decoding(JWT is invalid or missing), return null
    return null;
  }
}

// get JWT from local storage
export function getDiscordToken() {
  return {
    tokenType: localStorage.getItem("tokenType"),
    accessToken: localStorage.getItem("accessToken"),
  };
}

// Export authentication functions as object
export default {
  loginWithDiscord,
  logout,
  verifyToken,
  getDiscordToken,
};
