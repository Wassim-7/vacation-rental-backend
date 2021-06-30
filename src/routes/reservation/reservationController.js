import ReservationModel from './reservation'

export async function create(req, res) {
  let reservationData = req.body

  let referance = 'R' + Math.floor(Math.random() * 9000 + 1000)

  reservationData.payed = 'not payed'
  reservationData.referance = referance

  //saving data to database
  reservationData = await ReservationModel.create(reservationData)

  //send reponse
  return res.json(reservationData)
}

export async function getAll(req, res) {
  // get data from database
  const reservationsData = await ReservationModel.find()

  //send reponse
  return res.json(reservationsData)
}

export async function remove(req, res) {
  await ReservationModel.deleteOne({ _id: req.params.id })
  return res.json({ success: true })
}

export async function update(req, res) {
  await ReservationModel.updateOne({ _id: req.params.id }, req.body)

  return res.json({ success: true })
}