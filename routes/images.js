const express = require('express');
const router = express.Router();

// controllers
const { serveImages } = require('../contollers/imagesController');

/* <===== ROUTES =====> */
router.get('/:path', serveImages);

module.exports = router;
