const mongoose = require('mongoose')

const factSchema= new mongoose.Schema({
    fact:{
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    createdDate:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('WhaleSharkFacts', factSchema)