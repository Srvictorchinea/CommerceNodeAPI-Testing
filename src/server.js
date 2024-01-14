// serever
require('dotenv').config()
const logger = require('pino')()
const app = require('./app')
const port = process.env.PORT
app.listen( port, ()=> {
    logger.info(`Server is listening on port ${port}`)
})