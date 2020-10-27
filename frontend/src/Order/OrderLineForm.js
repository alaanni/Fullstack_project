import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux'
import { initOrderLines, createOrderLine } from '../reducers/orderLineReducer'
import { Button } from 'react-bootstrap'

const OrderLineForm = ({ show }) => {
  const dispatch = useDispatch()
  const [ordersProduct, setOrdersProduct] = useState('')
  const orderLines = useSelector(state => state.orderLines)

  useEffect(() => {
    dispatch(initOrderLines())
  }, [dispatch])

  if (!show) {
    return null
  }

  const orderlines = orderLines.map(t => { return { value: t.product, label: t.product } })

  const addOrderLine = (event) => {
    event.preventDefault()
    createOrderLine({
      product: ordersProduct
    })
  }

  return(
    <div className='formDiv'>
      <form onSubmit={addOrderLine}>
        <div>
          Select product
          <Select 
              value={ordersProduct} 
              onChange={(selectedType) => setOrdersProduct(selectedType)}
              options={orderlines}         
            />
        </div>
        <Button variant='primary' className='create-button' type="submit">Add new orderline</Button>
      </form>
    </div>
  )
}

export default OrderLineForm