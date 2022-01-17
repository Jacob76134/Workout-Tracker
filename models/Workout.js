const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({ 
    day:{
        type: Date,
        default: Date.now,
    },
    exercises:[
        {
            type: {
                type: String,
            },
            name: {
                type: String,
                unique: true,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            },
            duration: {
                type: Number,
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            }
        }
    ]
})

const Workout = mongoose.model('Workout', WorkoutSchema)

module.exports = Workout