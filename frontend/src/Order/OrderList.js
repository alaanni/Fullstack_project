import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import OrderForm from './OrderForm'
import { newNotification } from '../reducers/notificationReducer'
import { createOrder } from '../reducers/orderReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const OrderList = ({ 
    user 
    }) => {
    const [page, setPage] = useState('')
    const orders = useSelector(state => state.orders)

    const dispatch = useDispatch()
    const history = useHistory()

    const addOrder = (orderObject) => {
        dispatch(createOrder(orderObject))
        dispatch(newNotification(`Added new order`, 5))
        setPage('')
        history.push("/orders")
    }
    
    return (
    <div>
        {page === '' ? 
        <Button variant='primary' onClick={() => setPage('new order')}>Add new order</Button>
        : <Button variant='secondary' onClick={() => setPage('')}>cancel</Button>
        }
        <OrderForm 
            show={page === 'new order'}
            createOrder={addOrder} 
            user={user}
        />
        
        <h2>Orders</h2>
        <Table striped>
        <tbody>
            {orders.map(order =>
            <tr key={order.id}>
                <td>
                    <Link to={`/orders/${order.id}`}>
                    {order.orderLine.product}
                    </Link>
                </td>
                <td>
                    <Link to={`/customers/${order.customer.id}`}>
                    {order.customer.name}
                    </Link>
                </td>
                <td>
                    {order.status}
                </td>
            </tr>
            )}
        </tbody>
        </Table>
    </div>
    )
}

export default OrderList