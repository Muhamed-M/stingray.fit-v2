const mongoose = require('mongoose');

const coachingEnrollmentsSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    },
    fullName: {
      type: String,
      trim: true,
      maxlength: 100,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    age: {
      type: Number,
    },
    sex: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      trim: true,
    },
    new: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      enum: ['pending', 'active', 'declined', 'closed', 'deleted'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('CoachingEnrollments', coachingEnrollmentsSchema);
