const productRouter = require('express').Router()
const Product = require('../models/productSchema')

productRouter.get('/', async (request, response) => {
  const products = await Product
  .find({})
  response.json(products.map(product => product.toJSON()))
  })
  
productRouter.get('/:id', async (request, response) => {
  const product = await Product.findById(request.params.id)
  if (product) {
    response.json(product.toJSON())
  } else {
    response.status(404).end()
  } 
})

productRouter.post('/', async (request, response) => {
  const body = request.body
  const product = new Product({
    product: body.product,
    quantity: body.quantity,
    priceExclTax: body.priceExclTax,
    priceInclTax: body.priceInclTax,
    taxRate: body.taxRate,
    discount: body.discount,
    description: body.description
  })

  const savedProduct = await product.save()
  response.json(savedProduct.toJSON())
})

productRouter.put('/:id', async (request, response) => {
  const body = request.body
  const productBeforeUpdate = await Product.findById(request.params.id)

  const product = {}

  const updateProduct = await Product.findByIdAndUpdate(request.params.id, product, {new: true})
  response.json(updateProduct.toJSON())
})

productRouter.delete('/:id', async(request, response) => {
   const product = await Product.findById(request.params.id)
   await Product.findByIdAndRemove(request.params.id)
   response.status(204).end()
})

module.exports = productRouter