import mongoose from 'mongoose'
import { MONGODB_URI } from './env'

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (error) => {
  if (error)
    console.log(error)
  else
    console.log('database connected ---------<')
})
