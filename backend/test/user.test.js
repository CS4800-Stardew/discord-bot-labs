import { User, validateUser } from '../models/user'; // User model
import jwt from 'jsonwebtoken'; // library for JWT verification
import config from 'config'; // 'config' for configuration settings
import mongoose from 'mongoose'; // library for working with object IDs
import Joi from 'joi';

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
    
    // expect that decoded token matches original payload
    expect(decoded).toMatchObject(payload);
  });
});

describe('validateUser', () => {
  it('should return as valid', () => {
    const newUser = new User({
      email: 'test@email.com',
      username: 'hello',
      password: '12345'
    });
    validateUser(newUser);
  });
});