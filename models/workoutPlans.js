const mongoose = require('mongoose');

const WorkoutPlans = mongoose.Schema({
    title: {
        type: String,
    },
    price: {
        type: Number,
    },
    updatedAt: {
        type: Date,
    },
});

module.exports = mongoose.model('WorkoutPlans', WorkoutPlans);
