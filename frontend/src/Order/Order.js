import React from 'react'

const Order = ({ order, removeOrder }) => {

  const handleRemove = (event) => {
    event.preventDefault()
    removeOrder(order.id)
  }

  return (
    <div className='order'>
      <h2>Orders information</h2>
      <div>
        <p>order type: {order.orderLine.product}</p>
        <p>customer: {order.customer.name}</p>
        <p>comments: {order.comment}</p>
      </div>
      <button id='remove' onClick={handleRemove}>remove</button>
    </div>
  )}

export default Order
