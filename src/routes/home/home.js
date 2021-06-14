import mongoose from 'mongoose'

const homeSchema = new mongoose.Schema({
  referance: String,
  region: String,
  type: String,
  price: Number,
  photos: [String],
  description: String
})

const homeModel = mongoose.model('home', homeSchema)
export default homeModel