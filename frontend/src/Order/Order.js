import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteOrder } from '../reducers/orderReducer'
import { newNotification } from '../reducers/notificationReducer'
import OrderLineForm from './OrderLineForm'
import OrderLineList from './OrderLineList'
import { Link } from 'react-router-dom'

const Order = ({ order }) => {
  const orders = useSelector(state => state.orders)
  const history = useHistory()
  const dispatch = useDispatch()  
  const [, setError] = useState(false)
  const [page, setPage] = useState('')

  const handleRemove = (event) => {
    event.preventDefault()
    removeOrder(order.id)
  }

  const removeOrder = (id) => {
    const order = orders.find(order => order.id === id)
    if (window.confirm(`Removing order from ${order.customer.name}`)) {
      dispatch(deleteOrder(id))
        .catch(() => {
          setError(true)
          dispatch(newNotification(`Order ${order.id} from ${order.customer.name} was already deleted from server`, 5))
        })
      setError(false)
    }
    history.push("/orders")
  }

  if (!order) {
    return null
  }

  return (
    <div className='order'>
      <h2>Order information</h2>
      <div>
        <p>Customer: <Link to={`/customers/${order.customer.id}`}>{order.customer.name}</Link></p>
        <p>Building: <Link to={`/buildings/${order.building.id}`}>{order.building.type}</Link></p>
        <p>Additional details: {order.comment}</p>
      </div>
      <OrderLineList order={order}/>
      <br></br>
      <OrderLineForm show={page === 'new orderline'} order={order}/>
      <br></br>
      {page === '' ? 
        <Button variant='primary' onClick={() => setPage('new orderline')}>Add new orderline</Button>
        : <Button variant='secondary' onClick={() => setPage('')}>cancel</Button>
        }
      {' '}<Button variant='danger' onClick={handleRemove}>remove</Button>
    </div>
  )}

export default Order
