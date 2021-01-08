import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux'
import { initBuildings } from '../reducers/buildingReducer'
import { Button } from 'react-bootstrap'

const OrderForm = ({ 
  createOrder, 
  user, 
  show 
  }) => {

  const dispatch = useDispatch()

  const [customerName, setCustomerName] = useState('')
  const [comment, setComment] = useState('')
  const [ordersBuilding, setOrdersBuilding] = useState('')
  const customers = useSelector(state => state.customers)
  const buildings = useSelector(state => state.buildings)

  useEffect(() => {
    dispatch(initBuildings())
  }, [dispatch])

  if (!show) {
    return null
  }

  const names = customers.map(c => { return { value: c.name, label: c.name } })

  const selectBuildings = buildings.map(b => { return { value: b.type, label: b.type } })

  const addOrder = (event) => {
    event.preventDefault()
    createOrder({
      customer: customerName,
      building : ordersBuilding,
      user: user,
      comment: comment
    })
    setCustomerName('')
    setOrdersBuilding('')
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
              value={ordersBuilding} 
              onChange={(selectedType) => setOrdersBuilding(selectedType)}
              options={selectBuildings}         
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