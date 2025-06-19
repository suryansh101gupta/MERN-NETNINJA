const mongoose = require('mongoose')

const Schema = mongoose.Schema

const routineSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true
    },
    time: {
        type: Number,
    },
    user_id: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Routine', routineSchema)