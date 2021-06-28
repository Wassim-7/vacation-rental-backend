import express from 'express'
import { create, getAll, remove, update } from './reservationController'

const router = express.Router()

router.post('/reservation', create)
router.get('/reservations', getAll)
router.delete('/reservation/:id', remove)
router.put('/reservation/:id', update)


export default router