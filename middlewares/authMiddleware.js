const jwt = require('jsonwebtoken');

// model
const User = require('../models/user');

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // get token from headers
      token = req.headers.authorization.split(' ')[1];

      // verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // get admin from token
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: 'Unauthorized!' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Unauthorized, no token!' });
  }
};

module.exports = { protect };
