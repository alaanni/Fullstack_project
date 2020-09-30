import React from 'react'

const Customer = ({ customer }) => {
    if (!customer) {
        return null
    }
    return (
        <div>
            <h2>{customer.name}</h2>
            <div>address:</div>
            <div>{customer.street}, </div>
            <div>{customer.postalCode}, {customer.city}</div>
        </div>
    )
}

export default Customer