const jwt = require('jsonwebtoken');

// model
const Admin = require('../models/admin');

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // get token from headers
            token = req.headers.authorization.split(' ')[1];

            // verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // get admin from token
            req.user = await Admin.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            console.log(error);
            res.status = 401;
            throw new Error('Not authorized!');
        }
    }

    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token!');
    }
};

module.exports = { protect };
