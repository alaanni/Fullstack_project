import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux'
import { initOrderLines } from '../reducers/orderLineReducer'
import { Button } from 'react-bootstrap'

const OrderForm = ({ 
  createOrder, 
  user, 
  show 
  }) => {

  const dispatch = useDispatch()

  const [customerName, setCustomerName] = useState('')
  const [comment, setComment] = useState('')
  const [ordersProduct, setOrdersProduct] = useState('')
  const customers = useSelector(state => state.customers)
  const orderLines = useSelector(state => state.orderLines)

  useEffect(() => {
    dispatch(initOrderLines())
  }, [dispatch])

  if (!show) {
    return null
  }

  const names = customers.map(c => { return { value: c.name, label: c.name } })

  const ordertypes = orderLines.map(t => { return { value: t.product, label: t.product } })

  const addOrder = (event) => {
    event.preventDefault()
    createOrder({
      customer: customerName,
      orderLine : ordersProduct,
      user: user,
      comment: comment
    })
    setCustomerName('')
    setOrdersProduct('')
    setComment('')
  }

  return(
    <div className='formDiv'>
      <h2>New order</h2>

      <form onSubmit={addOrder}>
        <div>
          Select customer
          <Select 
              value={customerName} 
              onChange={(selectedName) => setCustomerName(selectedName)}
              options={names}         
            />
        </div>
        <div>
          Select building
          <Select 
              value={ordersProduct} 
              onChange={(selectedType) => setOrdersProduct(selectedType)}
              options={ordertypes}         
            />
        </div>
        <div>Comment</div>
        <div>
          <input
            style={{width: "690px", height: "100px"}}
            value={comment}
            onChange={({ target }) => setComment(target.value)}
          />
        </div>
        <Button variant='primary' className='create-button' type="submit">add new order</Button>
      </form>
    </div>
  )
}

export default OrderForm