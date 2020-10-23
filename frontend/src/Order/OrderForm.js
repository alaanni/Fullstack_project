import React, { useState } from 'react'
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux'

const OrderForm = ({ 
  createOrder, 
  user, 
  show 
  }) => {

  const dispatch = useDispatch()

  const [customerName, setCustomerName] = useState('')
  const [comment, setComment] = useState('')
  const customers = useSelector(state => state.customers)
  const orderLines = useSelector(state => state.orderLines)

  if (!show) {
    return null
  }

  const names = customers.map(c => { return { value: c.name, label: c.name } })

  const ordertypes = orderLines.map(t => { return { value: t.product, label: t.product } })

  const addOrder = (event) => {
    event.preventDefault()
    createOrder({
      customer: customerName,
      orderLines : orderLines,
      user: user
    })
    setCustomerName('')
    setOrderType('')
    setComment('')
  }

  return(
    <div className='formDiv'>
      <h2>new order</h2>

      <form onSubmit={addOrder}>
        <div>
          customer:
          <Select 
              value={customerName} 
              onChange={(selectedName) => setCustomerName(selectedName)}
              options={names}         
            />
        </div>
        <div>
          order type:
          <Select 
              value={orderType} 
              onChange={(selectedType) => setOrderType(selectedType)}
              options={ordertypes}         
            />
        </div>
        <div>comment:</div>
        <div>
          <input
            id='comment'
            value={comment}
            onChange={({ target }) => setComment(target.value)}
          />
        </div>
        <button className='create-button' type="submit">add new order</button>
      </form>
    </div>
  )
}

export default OrderForm