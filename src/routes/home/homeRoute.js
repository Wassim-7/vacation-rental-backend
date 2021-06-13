import express from 'express'
import { create, getAll, remove } from './homeController'

const router = express.Router()

router.post('/home', create)
router.get('/homes', getAll)
router.delete('/home/:id', remove)

export default router