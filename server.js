require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', (error) => console.error(err))
db.once('open', (error) => console.log('Connected to Database'))

app.use(express.json())

const factsRouter = require('./routes/facts')
app.use('/facts', factsRouter)

app.listen(3000, () => console.log('Server has started'))