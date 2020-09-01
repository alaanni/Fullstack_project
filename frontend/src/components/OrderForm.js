import React, { useState } from 'react'
import Select from 'react-select'
import { useSelector } from 'react-redux'

const OrderForm = ({ 
  createOrder, 
  user, 
  show 
  }) => {

  const [customerName, setCustomerName] = useState('')
  const [orderType, setOrderType] = useState('')
  const [comment, setComment] = useState('')
  const customers = useSelector(state => state.customers)

  let types = [{ name: 'nuohous', id: 1 }, 
  { name: 'ilmastoinnin puhdistus', id: 2 },
  { name: 'muu', id: 3 }]


  if (!show) {
    return null
  }

  const names = customers.map(c => { return { value: c.name, label: c.name } })

  const ordertypes = types.map(t => { return { value: t.name, label: t.name } })

  const addOrder = (event) => {
    event.preventDefault()
    createOrder({
      customer: customerName,
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