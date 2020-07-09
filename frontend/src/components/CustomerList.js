import React from 'react'
import { Table, Link } from 'react-bootstrap'

const CustomerList = (props) => {

    if (!props.show) {
        return null
      }

    return (
    <div>
      <h2>Customers</h2>
      <Table striped>
        <tbody>
          {props.customers.map(customer =>
            <tr key={customer.id}>
              <td>

                  {customer.name}

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