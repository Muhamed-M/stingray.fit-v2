const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path');
const sharp = require('sharp');
const {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} = require('@aws-sdk/client-s3');
// Set up the client
const s3 = new S3Client();
require('dotenv').config();

// aws s3 bucket from cyclic.sh
const BUCKET = process.env.BUCKET;

// models
const Admin = require('../models/admin');
const WorkoutPlans = require('../models/workoutPlans');
const Testimonial = require('../models/testimonials');
const Tranformation = require('../models/transformations');

// JWT Generator
const generateToken = (id) => {
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
    const { fullname, profession, text } = req.body;

    // Create testimonial
    await Testimonial.create({
      fullname,
      profession,
      text,
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
  const { buffer, originalname } = req.file;
  const filename = Date.now() + path.extname(originalname);
  // store image and thumbnail paths
  // store image and thumbnail paths
  const imagePath = `${filename}`;
  const thumbnailPath = `thumbnails/${filename}`;

  try {
    // optimize image
    const optimizedImage = await sharp(buffer)
      .jpeg({ mozjpeg: true, quality: 30 })
      .toBuffer();

    // optimize image for thumbnails
    const thumbnailImage = await sharp(buffer)
      .resize(280, 200)
      .jpeg({ mozjpeg: true, quality: 30 })
      .toBuffer();

    const params1 = {
      Bucket: BUCKET, // Replace with your bucket name
      Key: imagePath,
      Body: optimizedImage,
      ContentType: 'image/jpeg',
      ACL: 'public-read', // If you want the image to be publicly accessible
    };

    const params2 = {
      Bucket: BUCKET, // Replace with your bucket name
      Key: thumbnailPath,
      Body: thumbnailImage,
      ContentType: 'image/jpeg',
      ACL: 'public-read', // If you want the image to be publicly accessible
    };

    // Call S3 to retrieve upload file to specified bucket
    await s3.send(new PutObjectCommand(params1));
    await s3.send(new PutObjectCommand(params2));
    const imageUrl = `https://${params1.Bucket}.s3.${s3.config.region}.amazonaws.com/${params1.Key}`;
    const thumbnailUrl = `https://${params2.Bucket}.s3.${s3.config.region}.amazonaws.com/${params2.Key}`;

    // Store file path to db
    await Tranformation.create({
      imagePath: imageUrl,
      thumbnailPath: thumbnailUrl,
    });

    // store image and thumbnail paths
    const imagePath = upload1.Location;
    const thumbnailPath = upload2.Location;

    // Store file path to db
    await Tranformation.create({
      imagePath,
      thumbnailPath,
    });

    res.status(200).json({ message: 'Transformation uploaded successfully!' });
  } catch (error) {
    // fs.unlink(transformation.imagePath, (error) => {
    //   if (error) console.error(error);
    // });
    res.status(500).json({ message: error.message });
    console.log(error);
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
  const { id } = req.params;
  const { imagePath, thumbnailPath } = req.body;
  console.log(imagePath);

  try {
    // delete transformation from db
    await Tranformation.deleteOne({ _id: id });

    // create parameters for delete call
    const params1 = {
      Bucket: BUCKET,
      Key: imagePath.replace(`https://${BUCKET}.s3.amazonaws.com/`, ''),
    };

    const params2 = {
      Bucket: BUCKET,
      Key: thumbnailPath.replace(`https://${BUCKET}.s3.amazonaws.com/`, ''),
    };

    // delete images from s3 bucket
    const deletePromise1 = s3.deleteObject(params1).promise();
    const deletePromise2 = s3.deleteObject(params2).promise();

    await Promise.all([deletePromise1, deletePromise2]);

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
  deleteTestimonial,
  uploadTransformation,
  getTransformations,
  deleteTransformation,
};
