// models
const CoachingEnrollment = require('../models/coachingEnrollments');

// @desc   Submit enrollment
// @route  /api/enrollments
// @method post
const submitEnrollment = async (req, res) => {
  const { email, fullName, phoneNumber, about } = req.body;

  try {
    // Create a new enrollment document
    const enrollment = await CoachingEnrollment.create({
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
