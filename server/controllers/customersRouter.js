const jwt = require('jsonwebtoken')
const customersRouter = require('express').Router()
const Customer = require('../models/customerSchema')
const User = require('../models/userSchema')

customersRouter.get('/', async (request, response) => {
  const customers = await Customer.find({})
  .populate('orders', { id: 1 })
  .populate('buildings', { id: 1, type: 1})
  response.json(customers.map(customer => customer.toJSON()))
  })
  
customersRouter.get('/:id', async (request, response) => {
  const customer = await Customer.findById(request.params.id)
  if (customer) {
    response.json(customer.toJSON())
  } else {
    response.status(404).end()
  }
})

customersRouter.post('/', async (request, response) => {
  const body = request.body

  /*
  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id)
  */

  const customer = new Customer({
      name: body.name,
      phone: body.phone,
      email: body.email,
      street: body.street,
      city: body.city,
      postalCode: body.postalCode,
      comment: body.comment
  })

  const savedCustomer = await customer.save()

  response.json(savedCustomer.toJSON())
})

customersRouter.put('/:id', async (request, response) => {
  const body = request.body
  const customerBeforeUpdate = await Customer.findById(request.params.id)

  const customer = {

  }

  const updateCustomer = await Customer.findByIdAndUpdate(request.params.id, customer, {new: true})
  response.json(updateCustomer.toJSON())
})

customersRouter.delete('/:id', async(request, response) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
   const user = await User.findById(decodedToken.id)
   const customer = await Customer.findById(request.params.id)

   await Customer.findByIdAndRemove(request.params.id)
   response.status(204).end()

  response.status(401).end()
})

module.exports = customersRouter