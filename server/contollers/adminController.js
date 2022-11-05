const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const fs = require('fs');
const sharp = require('sharp');

// models
const Admin = require('../models/admin');
const WorkoutPlans = require('../models/workoutPlans');
const Testimonial = require('../models/testimonials');
const Tranformation = require('../models/transformations');

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
                token: generateToken(admin._id)
            });
        } else {
            res.status(400).json({
                message: 'Invalid credentials!'
            });
        }
    } catch (error) {
        console.log(error);
    }
};

/* <==== Workout plans ====> -CRUD- #START */
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
        const { onlinePrice, personalPrice } = req.body;
        const price = onlinePrice ? onlinePrice : personalPrice;

        // update price
        await WorkoutPlans.findByIdAndUpdate(id, { price: price });
        res.status(200).json({ message: 'Price updated successfully!' });
    } catch (error) {
        console.log(error);
    }
};

/* <==== Testimonials ====> -CRUD- #START */
// @desc   Create testimonial
// @route  /api/admin/testimonials
// @method post
const createTestimonial = async (req, res) => {
    try {
        const { fullname, profession, comment } = req.body;

        // Create testimonial
        await Testimonial.create({
            fullname,
            profession,
            comment
        });

        res.status(200).json({ message: 'Testimonial created successfully!' });
    } catch (error) {
        console.log(error);
        res.json({ message: 'Testimonial creation failed!' });
    }
};

// @desc   Get all testimonials
// @route  /api/admin/testimonials
// @method get
const getTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        res.json(testimonials);
    } catch (error) {
        console.log(error);
    }
};

// @desc   Delete testimonial
// @route  /api/admin/testimonials/:id
// @method delete
const deleteTestimonial = async (req, res) => {
    try {
        const { id } = req.params;
        await Testimonial.deleteOne({ _id: id });
        res.status(200).json({ message: 'Testimonial deleted successfully!' });
    } catch (error) {
        console.log(error);
    }
};

/* <==== Transformations ====> -CRUD- #START */
// @desc   Upload transformation image
// @route  /api/admin/transformations
// @method post
const uploadTransformation = async (req, res) => {
    const imagePath = req.file.path ? req.file.path : null;
    const thumbnailPath = './public/thumbnails/' + req.file.filename;
    let transformation;

    try {
        // Store file path to db
        transformation = await Tranformation.create({
            imagePath,
            thumbnailPath
        });

        // resize image for thumbnails
        sharp(imagePath).resize(280, 200).toFile(thumbnailPath);
        res.status(200).json({ message: 'Transformation uploaded successfully!' });
    } catch (err) {
        fs.unlink(transformation.imagePath, err => {
            if (err) console.error(err);
        });
        res.json({ message: err });
    }
};

// @desc   Get all transformations
// @route  /api/admin/transformations
// @method get
const getTransformations = async (req, res) => {
    try {
        const transformations = await Tranformation.find();
        res.json(transformations);
    } catch (error) {
        console.log(error);
    }
};

// @desc   Delete transformation
// @route  /api/admin/transformation/:id
// @method delete
const deleteTransformation = async (req, res) => {
    try {
        const { id } = req.params;
        const { imagePath, thumbnailPath } = req.body;

        await Tranformation.deleteOne({ _id: id });
        // delete image from files
        const files = [imagePath, thumbnailPath];
        files.forEach(file => {
            fs.unlinkSync(file);
        });
        res.status(200).json({ message: 'Transformation deleted successfully!' });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    authenticateAdmin,
    getWorkoutPlans,
    updateWorkoutPlansPrice,
    createTestimonial,
    getTestimonials,
    deleteTestimonial,
    uploadTransformation,
    getTransformations,
    deleteTransformation
};
