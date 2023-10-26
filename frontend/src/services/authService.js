// handles user authentication using JSON Web Tokens (JWTs)
// provides functions for logging in, logging out, and managing JWTs

import jwtDecode from 'jwt-decode'; // library for decoding JWTs
import http from './httpService'; // 'service' for making http requests

const apiEndpoint = '/auth'; // endpoint for user authentication
const tokenKey = "token"; // key used to store the JWT in local storage

// set JWT in HTTP service
http.setJwt(getJwt());

// log in a user by sending their email and password to backend
export async function login(emailOrUser, password) {
    const { data: jwt } = await http.post(apiEndpoint, { emailOrUser, password });
    // store the JWT in local storage
    localStorage.setItem(tokenKey, jwt);
}

// log in a user with JWT directly
export function loginWithJwt(jwt) {
    // store the JWT in local storage
    localStorage.setItem(tokenKey, jwt);
}

// log out user by removing JWT from local storage
export function logout() {
    localStorage.removeItem(tokenKey);
}

// get current user from JWT stored in local storage
export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        // decode JWT to obtain user information
        return jwtDecode(jwt);
    } catch (ex) {
        // If exception occurs during decoding(JWT is invalid or missing), return null
        return null;
    }
}

// get JWT from local storage
export function getJwt() {
    return localStorage.getItem(tokenKey);
}

// Export authentication functions as object
export default {
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
    getJwt
};
