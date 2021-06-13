import express from 'express'
import homeRouter from '../routes/home/homeRoute'
import reservationRouter from '../routes/reservation/reservationRoute'

const router = express.Router()

router.use('/', homeRouter)
router.use('/', reservationRouter)

export default router