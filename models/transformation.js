const mongoose = require('mongoose');

const Transformation = mongoose.Schema({
    imagePath: {
        type: String,
        required: true
    },
    thumbnailPath: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Transformation', Transformation);
