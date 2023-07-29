const express = require('express');
const router = express.Router();

// controllers
const { submitEnrollment } = require('../contollers/enrollmentsController');

/* <===== ROUTES =====> */
router.route('/').post(submitEnrollment);

module.exports = router;
