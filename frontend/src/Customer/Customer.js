import React from 'react'
import { Link } from 'react-router-dom'

const Customer = ({ customer }) => {
    if (!customer) {
        return null
    }
    return (
        <div>
            <h2>{customer.name}</h2>
            <h3>address:</h3>
            <div>{customer.street}, </div>
            <div>{customer.postalCode}, {customer.city}</div>
            <h3>orders:</h3>
            <div>{customer.orders.map(o => 
            <div key={o.id} ><Link to={`/orders/${o.id}`}>{o.id}</Link> order date: </div>)}
            </div>
        </div>
    )
}

export default Customer