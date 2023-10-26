import Joi from 'joi'; // library for data validation
import bcrypt from 'bcrypt'; // library for password hashing
import { User } from '../models/user.js'; // User model
import express from 'express'; // Express.js framework
const router = express.Router(); // create an Express router

// handle user authentication
router.post('/', async (req, res) => {
  // validate request data using Joi schema
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Find user by email
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Invalid email or password.');

  // Compare provided password with hashed password in the database
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid email or password.');

  // Generate authentication token for the user
  const token = user.generateAuthToken();
  res.send(token);
});

// Validate request data using Joi
function validate(req) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(req);
}

export default router;
