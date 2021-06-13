import express from 'express'
import routes from './config/routes'
import './config/database'

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use('/', routes)

app.listen(3010, () => {
    console.log('server start listening at port 3010');
})
