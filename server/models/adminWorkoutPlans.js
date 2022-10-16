const mongoose = require('mongoose');

const WorkoutPlans = mongoose.Schema({
    onlinePrice: {
        type: Number,
    },
    personalPrice: {
        type: Number,
    },
    updatedAt: {
        type: Date,
    },
});

module.exports = mongoose.model('WorkoutPlans', WorkoutPlans);
