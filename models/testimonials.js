const mongoose = require('mongoose');

const Testimonial = mongoose.Schema({
  fullname: {
    type: String,
    maxLength: 30,
    required: true,
  },
  profession: {
    type: String,
    maxLength: 30,
  },
  avatar: {
    type: String,
  },
  text: {
    en: {
      type: String,
      required: true,
    },
    bs: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongoose.model('Testimonial', Testimonial);
