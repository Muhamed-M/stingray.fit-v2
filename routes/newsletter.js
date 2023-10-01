const express = require('express');
const router = express.Router();

// controllers
const { addContact, getContactCount } = require('../contollers/newsletterController');

// middlewares
const { protect } = require('../middlewares/authMiddleware');

/* <===== ROUTES =====> */
router.route('/').post(addContact);
router.get('/count', protect, getContactCount);

module.exports = router;
