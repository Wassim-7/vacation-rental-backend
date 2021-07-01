import express from 'express'
import { create, getAll, remove, update } from './reservationController'
import { requireAuth } from '../../middlewares/authorization'

const router = express.Router()

router.post('/reservation', requireAuth, create)
router.get('/reservations', getAll)
router.delete('/reservation/:id', requireAuth, remove)
router.put('/reservation/:id', requireAuth, update)


export default router