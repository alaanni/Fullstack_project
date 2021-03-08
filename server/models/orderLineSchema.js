const mongoose = require('mongoose')

const orderLineSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: {
        type: Number
    },
    priceExclTax: {
        type: mongoose.Schema.Types.Decimal128
    },
    priceInclTax:  {
        type: mongoose.Schema.Types.Decimal128
    },
    taxRate:  {
        type: mongoose.Schema.Types.Decimal128
    },
    discount:  {
        type: mongoose.Schema.Types.Decimal128
    },
    description: String
  })

  orderLineSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  
module.exports = mongoose.model('OrderLine', orderLineSchema)