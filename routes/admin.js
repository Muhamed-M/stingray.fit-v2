const express = require('express');
const router = express.Router();

// controllers
const {
  authenticateAdmin,
  getWorkoutPlans,
  updateWorkoutPlansPrice,
  createTestimonial,
  getTestimonials,
  getTestimonial,
  updateTestimonial,
  deleteTestimonial,
  uploadTransformation,
  getTransformations,
  deleteTransformation,
} = require('../contollers/adminController');

// middlewares
const upload = require('../middlewares/uploadImage');

/* <===== ROUTES =====> */
// routes
// auth route
router.post('/auth', authenticateAdmin);
// workout plans routes
router.get('/workout-plans', getWorkoutPlans);
router.patch('/workout-plans/update-price/:id', updateWorkoutPlansPrice);
// testimonials routes
router
  .route('/testimonials')
  .post(upload.single('image'), createTestimonial)
  .get(getTestimonials);
router
  .route('/testimonials/:id')
  .get(getTestimonial)
  .put(updateTestimonial)
  .delete(deleteTestimonial);
// transformations routes
router.post('/transformations', upload.single('image'), uploadTransformation);
router.get('/transformations', getTransformations);
router.delete('/transformations/:id', deleteTransformation);

module.exports = router;
