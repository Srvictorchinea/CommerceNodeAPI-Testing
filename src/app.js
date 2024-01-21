//app
const express = require('express')
const pino = require("pino-http")()
const app = express()
const routes = require('./routes')

app.use(pino)
app.use(express.json())
app.use(routes)

module.exports = app