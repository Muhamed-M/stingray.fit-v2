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
      required: true,
      trim: true,
      maxlength: 100,
    },
    phoneNumber: {
      type: String,
      unique: true,
      trim: true,
      required: true,
      match: [/^\d{4,15}$/, 'Please fill a valid phone number'],
    },
    age: {
      type: Number,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
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
