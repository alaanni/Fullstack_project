const orderLinesRouter = require('express').Router()
const OrderLine = require('../models/orderLineSchema')
const Order = require('../models/orderSchema')
const Product = require('../models/productSchema')

orderLinesRouter.get('/', async (request, response) => {
  const orderLines = await OrderLine
  .find({})
  response.json(orderLines.map(orderLine => orderLine.toJSON()))
  })
  
orderLinesRouter.get('/:id', async (request, response) => {
  const orderLine = await OrderLine.findById(request.params.id)
  if (orderLine) {
    response.json(orderLine.toJSON())
  } else {
    response.status(404).end()
  } 
})

orderLinesRouter.post('/', async (request, response) => {
  console.log(request.body.order.id)
  const body = request.body
  const order = await Order.findById(body.order.id)
  const product = await Product.findOne({  product: body.product.value })

  const orderLine = new OrderLine({
    order: order.id,
    product: product,
    quantity: body.quantity,
    priceExclTax: body.priceExclTax,
    priceInclTax: body.priceInclTax,
    taxRate: body.taxRate,
    discount: body.discount,
    description: body.description
  })


  const savedOrderLine = await orderLine.save()
  order.orderLines = order.orderLines.concat(savedOrderLine);
  await order.save()

  response.json(savedOrderLine.toJSON())
})

orderLinesRouter.put('/:id', async (request, response) => {
  const body = request.body
  const orderBeforeUpdate = await Order.findById(request.params.id)

  const order = {}

  const updateOrder = await Order.findByIdAndUpdate(request.params.id, order, {new: true})
  response.json(updateOrder.toJSON())
})

orderLinesRouter.delete('/:id', async(request, response) => {
   const orderLine = await OrderLine.findById(request.params.id)
   await OrderLine.findByIdAndRemove(request.params.id)
   response.status(204).end()
})

module.exports = orderLinesRouter