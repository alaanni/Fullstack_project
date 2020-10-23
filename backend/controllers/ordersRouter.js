const jwt = require('jsonwebtoken')
const ordersRouter = require('express').Router()
const Order = require('../models/orderSchema')
const User = require('../models/userSchema')
const Customer = require('../models/customerSchema')
const OrderLine = require('../models/orderLineSchema')

ordersRouter.get('/', async (request, response) => {
  const orders = await Order
  .find({})
  .populate('user', { username: 1, name: 1 })
  .populate('customer', { name: 1 })
  .populate('orderLine', { product: 1 })
  response.json(orders.map(order => order.toJSON()))
  })
  
ordersRouter.get('/:id', async (request, response) => {
  const order = await Order.findById(request.params.id)
  if (order) {
    response.json(order.toJSON())
  } else {
    response.status(404).end()
  } 
})

ordersRouter.post('/', async (request, response) => {
  const body = request.body

  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
   const user = await User.findById(decodedToken.id)
   const ordersCustomer = await Customer.findOne({ name: body.customer.value })
   const ordersProduct = await OrderLine.findOne({ product: body.orderLine.value})

  const order = new Order({
    user: user,
    customer: ordersCustomer,
    orderLine: ordersProduct,
    comment: body.comment
  })

  const savedOrder = await order.save()
  user.orders = user.orders.concat(savedOrder.id)
  ordersCustomer.orders = ordersCustomer.orders.concat(savedOrder.id)

  await ordersCustomer.save()

  response.json(savedOrder.toJSON())
})

ordersRouter.put('/:id', async (request, response) => {
  const body = request.body
  const orderBeforeUpdate = await Order.findById(request.params.id)

  const order = {

  }

  const updateOrder = await Order.findByIdAndUpdate(request.params.id, order, {new: true})
  response.json(updateOrder.toJSON())
})

ordersRouter.delete('/:id', async(request, response) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
   const user = await User.findById(decodedToken.id)
   const order = await Order.findById(request.params.id)

   if ( order.user.toString() === user._id.toString() ) {
    await Order.findByIdAndRemove(request.params.id)
    response.status(204).end()
   }
  response.status(401).end()
})

module.exports = ordersRouter