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
    email: String,
    street: String,
    city: String,
    postalCode: Number,
    comment: String,
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
      }
    ],
  })

  customerSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  
module.exports = mongoose.model('Customer', customerSchema)