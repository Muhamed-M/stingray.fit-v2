const express = require('express');
const router = express.Router();

// controllers
const { authenticateAdmin } = require('../contollers/adminController');

/* <===== ROUTES =====> */
// routes
router.post('/', authenticateAdmin);

module.exports = router;
