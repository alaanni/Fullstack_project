import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { initOrderLines } from '../reducers/orderLineReducer'
import { useDispatch, useSelector } from 'react-redux'

const OrderLineList = ({ order }) => {
    const orderlines = useSelector(state => state.orderLines)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initOrderLines())
      }, [dispatch])

    if(!orderlines) return null
    return (
    <div>
        <h2>Orderlines</h2>
        <Table>
        <tbody>
            {orderlines.map(orderline =>
            <tr key={orderline.id}>
                <td>
                    {orderline.product}
                </td>
                <td>
                    {orderline.quantity}
                </td>
                <td>
                    price
                </td>
                <td>
                    <button>remove line</button>
                </td>
            </tr>
            )}
        </tbody>
        </Table>
    </div>
    )
}

export default OrderLineList 