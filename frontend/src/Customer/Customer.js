import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { createBuilding } from '../reducers/buildingReducer'
import AddBuildingForm from './AddBuildingForm'

const Customer = ({ customer }) => {
    const [page, setPage] = useState('')
    const dispatch = useDispatch()

    const addBuilding = (buildingObject) => {
        dispatch(createBuilding(buildingObject))
        setPage('')
    }

    if (!customer) {
        return null
    }

    return (
        <div>
            <h3>{customer.name}</h3>
            <div>{customer.phone}</div>
            <div>{customer.email}</div>
            <div>{customer.street}, </div>
            <div>{customer.postalCode}, {customer.city}</div>
            <h4>Buildings:</h4>
            {page === '' ? 
            <Button variant='primary' onClick={() => setPage('new building')}>Add new building to {customer.name}</Button>
            : <Button variant='secondary' onClick={() => setPage('')}>cancel</Button>
            }
        
            <AddBuildingForm
                show={page === 'new building'}
                createBuilding={addBuilding}
                customer={customer.id}
            />
            <div>{customer.buildings.map(b => 
            <div key={b.id}><Link to={`/buildings/${b.id}`}>{b.type}</Link></div>)}
            </div>
            <h4>Orders:</h4>
            <div>{customer.orders.map(o => 
            <div key={o.id}><Link to={`/orders/${o.id}`}>{o.id}</Link></div>)}
            </div>
        </div>
    )
}

export default Customer