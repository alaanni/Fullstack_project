const orderLinesRouter = require('express').Router()
const OrderLine = require('../models/orderLineSchema')

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
  const body = request.body
  const orderLine = new OrderLine({
    product: body.product,
    quantity: body.quantity,
    priceExclTax: body.priceExclTax,
    priceInclTax: body.priceInclTax,
    taxRate: body.taxRate,
    discount: body.discount,
    description: body.description
  })

  const savedOrderLine = await orderLine.save()
  await orderLine.save()
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