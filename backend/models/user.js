// defines Mongoose schema and model for user data, as well as validation functions for user objects

const config = require("config"); // 'config' module for configuration settings
const jwt = require("jsonwebtoken"); // library for generating JSON Web Tokens
const Joi = require("joi"); // library for data validation
const mongoose = require("mongoose"); // library for defining schemas and models

// Mongoose schema for user data
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
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
      name: this.name,
      email: this.email,
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
  const schema = {
    name: Joi.string()
      .min(2)
      .max(50)
      .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  };

  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
