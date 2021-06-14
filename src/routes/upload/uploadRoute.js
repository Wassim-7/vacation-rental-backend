import express from 'express'
import upload from './uploadController'

const router = express.Router()

router.post('/upload', upload)

export default router