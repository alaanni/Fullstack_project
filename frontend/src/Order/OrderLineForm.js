import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux'
import { initProducts } from '../reducers/productReducer'
import { createOrderLine } from '../reducers/orderLineReducer'
import { Button } from 'react-bootstrap'

const OrderLineForm = ({ show, order }) => {
  const dispatch = useDispatch()
  const [ordersProduct, setOrdersProduct] = useState('')
  const products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(initProducts())
  }, [dispatch])

  if (!show) {
    return null
  }

  const selectProducts = products.map(t => { return { value: t.product, label: t.product } })

  console.log("order: ", order)
  const addOrderLine = (event) => {
    event.preventDefault()
    createLine({
      product: ordersProduct,
      order: order
    })
    setOrdersProduct('');
  }

  const createLine = (orderLineObject) => {
    dispatch(createOrderLine(orderLineObject))
    //history.push("/orders")
}

  return(
    <div className='formDiv'>
      <form onSubmit={addOrderLine}>
        <div>
          Product
          <Select 
              value={ordersProduct} 
              onChange={(selectedType) => setOrdersProduct(selectedType)}
              options={selectProducts}         
            />
        </div>
        <Button variant='primary' className='create-button' type='submit'>Add</Button>
      </form>
    </div>
  )
}

export default OrderLineForm