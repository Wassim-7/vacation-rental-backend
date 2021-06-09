const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
    referance: String,
    period: String,
    clientName: String,
    clientPhone: String,
    payed: String
})

const reservationModel = mongoose.model('reservation', reservationSchema)
exports.default = reservationModel