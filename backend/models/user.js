// defines Mongoose schema and model for user data, as well as validation functions for user objects

import config from 'config';
import jwt from "jsonwebtoken"; // library for generating JSON Web Tokens
import Joi from "joi"; // library for data validation
import mongoose from "mongoose"; // library for defining schemas and models

// Mongoose schema for user data
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  username: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  isAdmin: Boolean
});

// generating an authentication token for the user
userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      isAdmin: this.isAdmin
    },
    config.get("jwtPrivateKey")
  );
  return token;
};

// creating Mongoose model named 'User' using the 'userSchema'
const User = mongoose.model("User", userSchema);

// validation function for user objects using Joi
function validateUser(user) {
  const schema = Joi.object({
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    username: Joi.string()
      .min(2)
      .max(50)
      .required(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  });
  
  return schema.validate(user);
}

export {User, validateUser};
