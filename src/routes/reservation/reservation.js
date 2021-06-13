import mongoose from 'mongoose'

const reservationSchema = new mongoose.Schema({
  referance: String,
  period: String,
  clientName: String,
  clientPhone: String,
  payed: String
})

const reservationModel = mongoose.model('reservation', reservationSchema)
export default reservationModel