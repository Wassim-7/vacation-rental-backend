import mongoose from 'mongoose'

const mongodbURI = 'mongodb://localhost:27017/vacationRental'

mongoose.connect(mongodbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (error) => {
  if (error)
    console.log(error)
  else
    console.log('database connected ---------<')
})
