import React, { useState } from 'react'

const Order = ({
  order,
  removeOrder,
  user
}) => {
  const [viewAll, setViewAll] = useState(false)

  const orderStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    borderRadius: 3,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const handleRemove = (event) => {
    event.preventDefault()
    removeOrder(order.id)
  }

  return (
    <div style={orderStyle} className='order'>
      {viewAll ?
        <div>
          {order.id} {order.customer} {order.status} <button onClick={() => setViewAll(false)}>hide</button><br></br>
          {order.orderLines}<br></br>
          {order.user.name}<br></br>

          {order.user.username === user.username ?
            <button id='remove' onClick={handleRemove}>remove</button> :
            null}
        </div>:
        <div>
          {order.id} {order.customer} {order.status} <button className='view' onClick={() => setViewAll(true)}>view</button>
        </div>
      }
    </div>
  )}

export default Order
