const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// model
const Admin = require('../models/admin');

// JWT Generator
const generateToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// @desc  Authenticate admin
// @route /api/admin
const authenticateAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check for admin email
        const admin = await Admin.findOne({ email });

        if (admin && (await bcrypt.compare(password, admin.password))) {
            res.json({
                _id: admin.id,
                name: admin.name,
                email: admin.email,
                token: generateToken(admin._id),
            });
        } else {
            res.status(400);
            throw new Error('Invalid credentials');
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = { authenticateAdmin };
