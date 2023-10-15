import cors from "cors";
import express from 'express';
import config from 'config';
import Joi from 'joi';
import joiObjectId from 'joi-objectid';
import error from "./middleware/error.js";

//route imports
import auth from './routes/auth.js';
import users from './routes/users.js';

// enables CORS for allowing cross-origin HTTP requests 
// enables communication between different domains
export function enableCors(app) {
    app.use(cors());
  };

// sets up routes for Express
export function setRoutes(app) {
  app.use(express.json());
  app.use('/api/auth', auth);
  app.use('/api/users', users);
  app.use(error);
}

// checking if jwtPrivateKey is in the config settings, throw error if not
// key needed for generating and verifying JWTs for user authentication
export function validateConfig() {
    if (!config.get('jwtPrivateKey')) {
        throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
    }
}

//adds support for validating MongoDB ObjectIDs for Joi
export function extendJoiValidation() {
    Joi.objectId = joiObjectId(Joi);
}


