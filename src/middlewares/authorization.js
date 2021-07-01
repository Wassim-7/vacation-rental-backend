import UserModel from '../routes/user/user'

export const requireAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization

    if (!token)
      return res.status(401).end()

    const user = await UserModel.findOne({ token })

    if (!user)
      return res.status(401).end()

    req.user = user

    return next()

  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
}
