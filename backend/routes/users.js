import auth from '../middleware/auth.js'; // authentication middleware
import bcrypt from 'bcrypt'; // library for password hashing
import _ from 'lodash'; // utility library
import { User, validateUser } from '../models/user.js'; // user model and validation function
import express from 'express'; // Express.js framework
const router = express.Router(); // create an Express router

// get currently authenticated user's profile
router.get('/me', auth, async (req, res) => {
  // find user by ID, excluding password field
  const user = await User.findById(req.user._id).select('-password');
  res.send(user);
});

// register new user
router.post('/', async (req, res) => {
  // validate user data using Joi validation
   const { error } = validateUser(req.body);
   if (error) return res.status(400).send(error.details[0].message);

  // check if user already exists by email
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User already registered.');

  // create new User instance with selected properties from the request body
  user = new User(_.pick(req.body, ['name', 'email', 'password']));

  // generate salt and hash user's password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  // save new user to database
  await user.save();

  // generate authentication token for user
  const token = user.generateAuthToken();

  // set 'x-auth-token' header and send user data (excluding password)
  res
    .header('x-auth-token', token)
    .header('access-control-expose-headers', 'x-auth-token')
    .send(_.pick(user, ['_id', 'name', 'email']));
});

export default router;
