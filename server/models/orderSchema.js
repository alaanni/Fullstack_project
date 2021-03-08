const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    customer: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer'
    },
    building: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Building'
    },
    orderLines: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderLine'
      }
    ],
    status: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Status'
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    comment: String
  })

  orderSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  
module.exports = mongoose.model('Order', orderSchema)