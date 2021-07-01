import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  token: String
})

const userModel = mongoose.model('user', userSchema)
export default userModel