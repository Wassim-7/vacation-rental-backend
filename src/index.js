import cors from 'cors'
import morgan from 'morgan'
import express from 'express'
import routes from './config/routes'
import './config/database'
import { PORT } from './config/env'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())
app.use(morgan('dev'))
app.use('/', routes)
app.use('/', express.static('public/uploads'));

app.listen(PORT, () => {
    console.log('server start listening at port 3010');
})