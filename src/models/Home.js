const mongoose = require('mongoose')

const homeSchema = new mongoose.Schema({
    referance: String,
    region: String,
    type: String,
    price: String,
    description: String
})

const homeModel = mongoose.model('home', homeSchema)
exports.default = homeModel