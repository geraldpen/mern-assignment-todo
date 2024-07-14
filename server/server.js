const express = require('express')
const mongoose = require ('mongoose')
const routes = require('./routes/Todo_route')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT  || 5000

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log(`connected to the database`))
    .catch((err) => console.log(err))

    app.use(routes)

app.listen(PORT, ( ) => console.log(`Listining on: {PORT}`))      