import express from 'express'
import { create, getAll } from './reservationController'

const router = express.Router()

router.post('/reservation', create)
router.get('/reservations', getAll)

export default router