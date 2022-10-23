const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// models
const Admin = require('../models/admin');
const WorkoutPlans = require('../models/adminWorkoutPlans');

// JWT Generator
const generateToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// @desc   Authenticate admin
// @route  /api/admin
// @method post
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
            res.status(400).json({
                message: 'Invalid credentials!',
            });
        }
    } catch (error) {
        console.log(error);
    }
};

// @desc   Get Workout Plans related data
// @route  /api/admin/workout-plans
// @method get
const getWorkoutPlans = async (req, res) => {
    try {
        // find workout plans related data
        const workoutPlans = await WorkoutPlans.find();
        res.json(workoutPlans);
    } catch (error) {
        console.log(error);
    }
};

// @desc   Update Workout Plans price
// @route  /api/admin/workout-plans/update-price
// @method put
const updateWorkoutPlansPrice = async (req, res) => {
    try {
        // Gather data
        const { id } = req.params;
        const { onlinePrice } = req.body;

        // update price
        await WorkoutPlans.updateOne({ id: id }, { onlinePrice: onlinePrice });
        res.status(200).json({ message: 'Price updated successfully!' });
    } catch (error) {
        console.log(error);
    }
};

module.exports = { authenticateAdmin, getWorkoutPlans, updateWorkoutPlansPrice };
