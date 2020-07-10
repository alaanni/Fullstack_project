import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomerForm from '../components/CustomerForm'
import customerService from '../services/customers'

const CustomerList = ({ customers, setCustomers, setMessage }) => {
    const [page, setPage] = useState('')

    const addCustomer = (customerObject) => {
        customerService
          .create(customerObject)
          .then(returnedCustomer => {
            setCustomers(customers.concat(returnedCustomer))
            setMessage(
              `Added new customer ${returnedCustomer.name}`
            )
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
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