import express from 'express'
import { create, getAll, remove, update } from './homeController'

const router = express.Router()

router.post('/home', create)
router.get('/homes', getAll)
router.delete('/home/:id', remove)
router.put('/home/:id', update)


export default router