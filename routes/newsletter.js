const express = require('express');
const router = express.Router();

// controllers
const { addContact } = require('../contollers/newsletterController');

/* <===== ROUTES =====> */
router.route('/').post(addContact);

module.exports = router;
