import express from 'express'
import homeRouter from '../routes/home/homeRoute'
import reservationRouter from '../routes/reservation/reservationRoute'
import uploadRouter from '../routes/upload/uploadRoute'
import userRouter from '../routes/user/userRoute'

const router = express.Router()

router.use('/', homeRouter)
router.use('/', reservationRouter)
router.use('/', uploadRouter)
router.use('/', userRouter)

export default router