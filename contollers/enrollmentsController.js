// models
const CoachingEnrollment = require('../models/coachingEnrollment');

// @desc   Submit enrollment
// @route  public /api/enrollments
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

// @desc   Get all enrollments
// @route  private /api/enrollments
// @method get
const getEnrollments = async (req, res) => {
  try {
    // get all enrollments
    const enrollments = await CoachingEnrollment.find();

    // Send a success response
    res.status(200).json(enrollments);
  } catch (error) {
    console.log(error);
    // Handle any errors that occur during the save
    res.status(500).json({
      error: error.message,
    });
  }
};

// @desc   Get enrollments stats
// @route  private /api/enrollments/dashboard
// @method get
const getEnrollmentStatistics = async (req, res) => {
  try {
    // Total Number of Enrollments
    const totalEnrollments = await CoachingEnrollment.countDocuments();

    // This Month
    const startOfThisMonth = new Date();
    startOfThisMonth.setDate(1);
    startOfThisMonth.setHours(0, 0, 0, 0);
    const enrollmentsThisMonth = await CoachingEnrollment.countDocuments({
      createdAt: { $gte: startOfThisMonth },
    });

    // Last Month
    const startOfLastMonth = new Date(startOfThisMonth);
    startOfLastMonth.setMonth(startOfLastMonth.getMonth() - 1);
    const endOfLastMonth = new Date(startOfThisMonth);
    endOfLastMonth.setDate(0);
    endOfLastMonth.setHours(23, 59, 59, 999);
    const enrollmentsLastMonth = await CoachingEnrollment.countDocuments({
      createdAt: { $gte: startOfLastMonth, $lte: endOfLastMonth },
    });

    // Return the statistics
    res.status(200).json({
      totalEnrollments,
      enrollmentsThisMonth,
      enrollmentsLastMonth,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving enrollment statistics',
      error: error.message,
    });
  }
};

module.exports = {
  submitEnrollment,
  getEnrollments,
  getEnrollmentStatistics,
};
