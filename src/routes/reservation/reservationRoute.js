import express from 'express'
import { create, getAll, remove } from './reservationController'

const router = express.Router()

router.post('/reservation', create)
router.get('/reservations', getAll)
router.delete('/reservation/:id', remove)

export default router