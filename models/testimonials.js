const mongoose = require('mongoose');

const Testimonial = mongoose.Schema({
    fullname: {
        type: String,
        maxLength: 30,
        required: true
    },
    profession: {
        type: String,
        maxLength: 30
    },
    text: {
        en: {
            type: String,
            maxLength: 250,
            required: true
        },
        bs: {
            type: String,
            maxLength: 250,
            required: true
        }
    }
});

module.exports = mongoose.model('Testimonial', Testimonial);
