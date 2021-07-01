import express from 'express'
import { create, getAll, remove, update } from './homeController'
import { requireAuth } from '../../middlewares/authorization'

const router = express.Router()

router.post('/home', requireAuth, create)
router.get('/homes', getAll)
router.delete('/home/:id', requireAuth, remove)
router.put('/home/:id', requireAuth, update)


export default router