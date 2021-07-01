import express from 'express'
import { login, logout, verifyAccess } from './userController'
import { requireAuth } from '../../middlewares/authorization'

const router = express.Router()

router.post('/login', login)
router.post('/logout', requireAuth, logout)
router.get('/verifyAccess', requireAuth, verifyAccess)

export default router