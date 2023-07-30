// models
const CoachingEnrollments = require('../models/coachingEnrollments');

// @desc   Submit enrollment
// @route  /api/enrollments
// @method post
const submitEnrollment = async (req, res) => {
  const { email, fullName, phoneNumber, about } = req.body;

  try {
    // Create a new enrollment document
    const enrollment = await CoachingEnrollments.create({
      email,
      fullName,
      phoneNumber,
      about,
    });

    // Send a success response
    res.status(201).json({
      message: 'Enrollment submitted successfully',
      data: enrollment,
    });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      const message = `An enrollment with that ${field} already exists.`;
      console.log(message);
      return res.status(400).json({ message });
    }
    // Handle any errors that occur during the save
    res.status(400).json({
      message: 'Error submitting enrollment',
      error: error.message,
    });
  }
};

module.exports = {
  submitEnrollment,
};
