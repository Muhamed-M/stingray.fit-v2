const express = require('express');
const router = express.Router();

// controllers
const {
    authenticateAdmin,
    getWorkoutPlans,
    updateWorkoutPlansPrice,
} = require('../contollers/adminController');

/* <===== ROUTES =====> */
// routes
router.post('/auth', authenticateAdmin);
router.get('/workout-plans', getWorkoutPlans);
router.put('/workout-plans/update-price/:id', updateWorkoutPlansPrice);

module.exports = router;
