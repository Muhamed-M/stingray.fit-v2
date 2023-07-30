const express = require('express');
const router = express.Router();

// controllers
const { submitEnrollment, getEnrollments, getEnrollmentStatistics } = require('../contollers/enrollmentsController');

// middlewares
const { protect } = require('../middlewares/authMiddleware');

/* <===== ROUTES =====> */
router.route('/').post(submitEnrollment).get(protect, getEnrollments);
router.get('/dashboard', getEnrollmentStatistics);

module.exports = router;
