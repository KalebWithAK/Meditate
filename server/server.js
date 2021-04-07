#! /usr/bin/env node

const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes.js')

const app = express()
const port = 3001

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${ port }`)
})