import UserModel from './user'

export async function login(req, res) {

  if (!req.body.email)
    return res.status(401).json({ error: 'Email cannot be empty' })

  if (!req.body.password)
    return res.status(401).json({ error: 'Password cannot be empty' })

  let user = await UserModel.findOne({ email: req.body.email })

  if (!user)
    return res.status(401).json({ error: 'Wrong email' })

  if (user.password != req.body.password)
    return res.status(401).json({ error: 'Wrong password' })

  user.token = Math.random().toString(36).substring(2, 15)
  await user.save()

  user = user.toJSON()
  delete user.password

  return res.json(user)
}

export async function logout(req, res) {

  req.user.token = null
  await req.user.save()

  return res.status(200).end()
}

export async function verifyAccess(req, res) {
  return res.status(200).end()
}
