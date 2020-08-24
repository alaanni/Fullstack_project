import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import OrderForm from '../components/OrderForm'
import { newNotification } from '../reducers/notificationReducer'
import { createOrder } from '../reducers/orderReducer'
import { useDispatch } from 'react-redux'

const OrderList = ({ 
    orders, 
    customers, 
    user 
    }) => {
    const [page, setPage] = useState('')

    const dispatch = useDispatch()

    const addOrder = (orderObject) => {
        dispatch(createOrder(orderObject))
        dispatch(newNotification(`Added new order from ${orderObject.customer.name}`))
        setPage('')
    }
    
    console.log('orders:', orders)
    
    return (
    <div>
        {page === '' ? 
        <button onClick={() => setPage('new order')}>add new order</button>
        : <button onClick={() => setPage('')}>cancel</button>
        }
        <OrderForm 
            show={page === 'new order'}
            customers={customers}
            createOrder={addOrder} 
            user={user}
        />
        
        <h2>orders</h2>
        <Table striped>
        <tbody>
            {orders.map(order =>
            <tr key={order.id}>
                <td>
                    <Link to={`/orders/${order.id}`}>
                    {order.id}
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