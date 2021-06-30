import multer from 'multer'
import path from 'path'
import fs from 'fs'
import { SERVER_URL } from '../../config/env'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {

    const uplaodPath = path.join(__dirname, '/../../../public/uploads')

    if (!fs.existsSync(uplaodPath))
      fs.mkdirSync(uplaodPath, err => cb(err, uplaodPath))

    cb(null, uplaodPath)
  },
  filename: (req, file, cb) => {
    const name = Date.now() + '_' + file.originalname
    cb(null, name)
  }
})

const upload = multer({
  storage: storage
}).array('file')

export default async (req, res) => {
  upload(req, res, err => {
    try {
      if (err) {
        console.log(err)
        return res.status(500).json(err)
      }

      const fileUrls = req.files.map(file => SERVER_URL + file.filename)

      return res.json({ url: fileUrls[0] })
    } catch (err) {
      console.log(err)
      res.status(500).end()
    }
  })
}