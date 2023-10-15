import jwt from 'jsonwebtoken'; // library for JSON Web Tokens
import config from 'config';

/**
 * middleware for user authentication with JSON Web Tokens
 * checks for valid token in request header and decodes it
 * if token is valid, it adds decoded user information to the request
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
export default function authMiddleware(req, res, next) {
  // check if authentication is not required (like public routes)
  if (!config.get('requiresAuth')) return next();

  // Get JWT token from request header
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    // verify token using JWT secret key from config
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
    
    // Add decoded user information to request
    req.user = decoded;
    
    // Move to the next middleware
    next();
  } catch (ex) {
    res.status(400).send('Invalid token.');
  }
}
