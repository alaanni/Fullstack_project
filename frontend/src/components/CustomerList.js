import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomerForm from '../components/CustomerForm'
import { useDispatch, useSelector } from 'react-redux'
import { createCustomer } from '../reducers/customerReducer'
import { newNotification } from '../reducers/notificationReducer'

const CustomerList = () => {
    const [page, setPage] = useState('')
    const customers = useSelector(state => state.customers)

    const dispatch = useDispatch()

    const addCustomer = (customerObject) => {
        dispatch(createCustomer(customerObject))
        dispatch(newNotification(`Added new customer ${customerObject.name}`, 5))
        setPage('')
    }

    return (       
        <div>
            {page === '' ? 
            <button onClick={() => setPage('new customer')}>add new customer</button>
            : <button onClick={() => setPage('')}>cancel</button>
            }
        
            <CustomerForm
                show={page === 'new customer'}
                createCustomer={addCustomer}
            />

            <h2>customers</h2>
            <Table striped>
                <tbody>
                {customers.map(customer =>
                <tr key={customer.id}>
                <td>
                <Link to={`/customers/${customer.id}`}>
                    {customer.name}
                </Link>
                </td>
                <td>
                    {customer.postalCode}
                </td>
                </tr>
                )}
                </tbody>
            </Table>
        </div>
    )
}

export default CustomerList