const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    phone: {
        type: Number,
        required: true
      },
    email: {
      type: String,
      required: true
    },
    street: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    postalCode: {
      type: Number,
      required: true
    },
    comment: String,
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
      }
    ],
    buildings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Building'
      }
    ]
  })

  customerSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  
module.exports = mongoose.model('Customer', customerSchema)