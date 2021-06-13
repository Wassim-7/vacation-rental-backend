import express from 'express'
import { create, getAll } from './homeController'

const router = express.Router()

router.post('/home', create)
router.get('/homes', getAll)

export default router