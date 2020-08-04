const mongoose = require('mongoose');

const alienSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    powers: {
        type: Boolean,
        required: true,
        default: false
    },
    place: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Alien', alienSchema)