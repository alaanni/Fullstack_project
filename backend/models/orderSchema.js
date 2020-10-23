const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer'
    },
    orderLine: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'OrderLine'
    },
    status: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Status'
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  })

  orderSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  
module.exports = mongoose.model('Order', orderSchema)