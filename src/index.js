//---//import
const express = require('express')
const mongoose = require('mongoose')
const HomeModel = require('./models/Home').default
const ReservationModel = require('./models/Reservation').default

//--//configuration
const app = express()
app.use(express.urlencoded({ extended: false }))

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


//---// implementation
app.get('/hello', (req, res) => {
    return res.json({ message: 'hello node JS' })
})

// Reservation
app.get('/homes', async (req, res) => {
    const homesData = await HomeModel.find()
    return res.json(homesData)
})

app.post('/home', async (req, res) => {
    let homeData = req.body

    //saving data to database
    homeData = await HomeModel.create(homeData)

    //send reponse
    return res.json(homeData)
})

//Reservation
app.get('/reservations', async (req, res) => {
    const reservationList = await ReservationModel.find()
    return res.json(reservationList)
})

app.post('/reservation', async (req, res) => {
    let reservationData = req.body
    reservationData = await ReservationModel.create(ReservationData)
    return res.json(reservationData)
})

app.delete('/reservation/:id', async (req, res) => {
    await ReservationModel.remove({ _id: req.params.id })
    return res.json({ success: true })
})

app.put('/reservation/:id', async (req, res) => {
    await ReservationModel.updateOne({ _id: req.paarams.id }, { referance: req.body.referance })
    return res.json({ success: true })
})

app.listen(3000, () => {
    console.log('server start listening at port 3000');
})
