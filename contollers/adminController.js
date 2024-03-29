const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path');
const sharp = require('sharp');
const sanitizeHtml = require('sanitize-html');
// Set up the client
require('dotenv').config();

// aws s3 bucket from cyclic.sh
const BUCKET = process.env.CYCLIC_BUCKET_NAME;
// cyclic fs
const fs = require('@cyclic.sh/s3fs')(BUCKET);

// models
const User = require('../models/user');
const WorkoutPlan = require('../models/workoutPlan');
const Testimonial = require('../models/testimonial');
const Transformation = require('../models/transformation');

// JWT Generator
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// @desc   Authenticate user
// @route  /api/admin
// @method post
const authenticateAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check for user email
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({
        message: 'Invalid credentials!',
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
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
    const workoutPlans = await WorkoutPlan.find();
    res.json(workoutPlans);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
    await WorkoutPlan.findByIdAndUpdate(id, { price: price });
    res.status(200).json({ message: 'Price updated successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

/* <==== Testimonials ====> -CRUD- #START */
// @desc   Create testimonial
// @route  /api/admin/testimonials
// @method post
const createTestimonial = async (req, res) => {
  const { fullname, profession, textBs, textEn } = req.body;
  let avatarPath = '';

  // sanitize HTML input
  const config = {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['a', 'span', 'div', 'p']), // Allow default tags plus "a", "span", "div", "p"
    allowedAttributes: {
      '*': ['style'], // Allow "style" for all tags
      a: ['href'], // Allow "href" for "a" tags
    },
    allowedStyles: {
      '*': {
        // For all tags
        color: [/.*/], // Allow the "color" style, accept any value
        'font-size': [/.*/], // Allow "font-size" style, accept any value
      },
    },
  };
  const bs = sanitizeHtml(textBs, config);
  const en = sanitizeHtml(textEn, config);

  if (req.file) {
    const { buffer, originalname } = req.file;
    const filename = Date.now() + path.extname(originalname);
    // store avatar img
    avatarPath = `images-${filename}`;

    try {
      // optimize image for avatar
      const avatarImage = await sharp(buffer).resize(100, 100).jpeg({ mozjpeg: true, quality: 30 }).toBuffer();

      // upload avatar
      fs.writeFile(avatarPath, avatarImage, (err) => {
        if (err) throw err;
        console.log('Image uploaded successfully!');
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: err.message });
    }
  }

  try {
    // Create testimonial
    const testimonial = await Testimonial.create({
      fullname,
      profession,
      avatar: avatarPath,
      text: {
        bs,
        en,
      },
    });

    res.status(200).json({ testimonial, message: 'Testimonial created successfully!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
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
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

// @desc   Get single testimonial by id
// @route  /api/admin/testimonials/:id
// @method get
const getTestimonial = async (req, res) => {
  const { id } = req.params;
  try {
    const testimonial = await Testimonial.findById(id);
    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

// @desc   Update testimonial
// @route  /api/admin/testimonials/:id
// @method put
const updateTestimonial = async (req, res) => {
  const { id } = req.params;
  const { fullname, profession, text } = req.body;
  let avatarPath = '';

  if (req.file) {
    const { buffer, originalname } = req.file;
    const filename = Date.now() + path.extname(originalname);
    // store avatar img
    avatarPath = `images-${filename}`;

    try {
      // optimize image for avatar
      const avatarImage = await sharp(buffer).resize(100, 100).jpeg({ mozjpeg: true, quality: 30 }).toBuffer();

      // upload avatar
      fs.writeFile(avatarPath, avatarImage, (err) => {
        if (err) throw err;
        console.log('Image uploaded successfully!');
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: err.message });
    }
  }
  try {
    // Create testimonial
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      id,
      {
        fullname,
        profession,
        avatar: avatarPath,
        text,
      },
      { new: true }
    );

    if (!updatedTestimonial) {
      return res.status(404).send('Testimonial with the given id was not found.');
    }

    res.status(200).json({
      updatedTestimonial,
      message: 'Testimonial updated successfully!',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// @desc   Delete testimonial
// @route  /api/admin/testimonials/:id
// @method delete
const deleteTestimonial = async (req, res) => {
  const { id } = req.params;
  const { avatar } = req.body;

  try {
    if (avatar) await fs.unlinkSync(avatar);
    await Testimonial.deleteOne({ _id: id });
    res.status(200).json({ message: 'Testimonial deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

/* <==== Transformations ====> -CRUD- #START */
// @desc   Upload transformation image
// @route  /api/admin/transformations
// @method post
const uploadTransformation = async (req, res) => {
  const { buffer, originalname } = req.file;
  const filename = Date.now() + path.extname(originalname);
  // store image and thumbnail paths
  const imagePath = `images-${filename}`;
  const thumbnailPath = `thumbnails-${filename}`;

  try {
    // optimize image
    const optimizedImage = await sharp(buffer).jpeg({ mozjpeg: true, quality: 30 }).toBuffer();

    // optimize image for thumbnails
    const thumbnailImage = await sharp(buffer)
      .resize(280, 200)
      .jpeg({ mozjpeg: true, quality: 30 }) // https://cyclic-muddy-hoodie-ox-sa-east-1.s3.sa-east-1.amazonaws.com/images/1690447140955.jpg
      .toBuffer();

    fs.writeFile(imagePath, optimizedImage, (err) => {
      if (err) throw err;
      console.log('Image uploaded successfully!');
    });
    fs.writeFile(thumbnailPath, thumbnailImage, (err) => {
      if (err) throw err;
      console.log('Thumbnail uploaded successfully!');
    });

    // Store file path to db
    await Transformation.create({
      imagePath,
      thumbnailPath,
    });

    res.status(200).json({ message: 'Transformation uploaded successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

// @desc   Get all transformations
// @route  /api/admin/transformations
// @method get
const getTransformations = async (req, res) => {
  try {
    const transformations = await Transformation.find();
    res.json(transformations);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

// @desc   Delete transformation
// @route  /api/admin/transformation/:id
// @method delete
const deleteTransformation = async (req, res) => {
  const { id } = req.params;
  const { imagePath, thumbnailPath } = req.body;

  try {
    // delete transformation from db
    await Transformation.deleteOne({ _id: id });

    // delete image from fs
    const files = [imagePath, thumbnailPath];
    files.forEach((file) => {
      fs.unlinkSync(file);
    });

    res.status(200).json({ message: 'Transformation deleted successfully!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  authenticateAdmin,
  getWorkoutPlans,
  updateWorkoutPlansPrice,
  createTestimonial,
  getTestimonials,
  getTestimonial,
  updateTestimonial,
  deleteTestimonial,
  uploadTransformation,
  getTransformations,
  deleteTransformation,
};
