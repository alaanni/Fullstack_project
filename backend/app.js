const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()

const ordersRouter = require('./controllers/ordersRouter')
const usersRouter = require('./controllers/usersRouter')
const loginRouter = require('./controllers/loginRouter')
const customersRouter = require('./controllers/customersRouter')
const orderLinesRouter = require('./controllers/orderLinesRouter')
const buildingsRouter = require('./controllers/buildingsRouter')
const productRouter = require('./controllers/productRouter')

const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const cors = require('cors')
const mongoose = require('mongoose')

logger.info('connecting to', config.MONGODB_URI)
  
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true,  useFindAndModify: false, useCreateIndex: true })
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error('error connection to MongoDB:', error.message)
      })
  
app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)

app.use('/api/orders', ordersRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/customers', customersRouter)
app.use('/api/orderLines', orderLinesRouter)
app.use('/api/buildings', buildingsRouter)
app.use('/api/products', productRouter)

if (process.env.NODE_ENV === 'test') {
    const testingRouter = require('./controllers/testing')
    app.use('/api/testing', testingRouter)
  }

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
  
