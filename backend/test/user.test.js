// tests 'generateAuthToken' method of the User model
const { User, validateUser } = require('../models/user'); // User model
const jwt = require('jsonwebtoken'); // library for JWT verification
const config = require('config'); // 'config' for configuration settings
const mongoose = require('mongoose'); // library for working with object IDs

// Describe the test case
describe('user.generateAuthToken', () => {
  it('should return a valid JWT', () => {
    // create payload with sample user ID and isAdmin status
    const payload = { 
      _id: new mongoose.Types.ObjectId().toHexString(), 
      isAdmin: true 
    };
    
    // create new User instance with payload
    const user = new User(payload);
    
    // generate authentication token using 'generateAuthToken' method
    const token = user.generateAuthToken();
    
    // Verify generated token using JWT library and app's secret key
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
    
    // Expect that decoded token matches original payload
    expect(decoded).toMatchObject(payload);
  });
});

describe('validateUser', () => {
  it('should return as valid', () => {
    const newUser = new User({
      email: 'test@email.com',
      username: 'hello',
      password: '12345'
    })
    validateUser(newUser);
  });
});
