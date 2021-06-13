import HomeModel from './home'

export async function create(req, res) {
  let homeData = req.body

  //saving data to database
  homeData = await HomeModel.create(homeData)

  //send reponse
  return res.json(homeData)
}

export async function getAll(req, res) {
  // get data from database
  const homesData = await HomeModel.find()

  //send reponse
  return res.json(homesData)
}

export async function remove(req, res) {
  await HomeModel.deleteOne({ _id: req.params.id })
  return res.json({ success: true })
}