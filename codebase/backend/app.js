const express = require('express')
const cors = require('cors');
<<<<<<< HEAD
=======
const { db } = require('./db/db');
const {readdirSync} = require('fs')
>>>>>>> 85a3ace2bae50cb49c8232d14c565fcd75382a9f
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

<<<<<<< HEAD
const server = () => {
    app.listen(PORT, () => {
        console.log
=======
//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
>>>>>>> 85a3ace2bae50cb49c8232d14c565fcd75382a9f
    })
}

server()
