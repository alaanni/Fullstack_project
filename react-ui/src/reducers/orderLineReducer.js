import orderLineService from '../services/orderLineService'

const reducer = (state = [], action) => {
  
  switch(action.type) {
    case 'INIT_ORDERLINES':
      return action.data
    case 'NEW_ORDERLINE':
      return [...state, action.data]
    case 'REMOVE_ORDERLINE':
        return state.filter(orderLine => orderLine.id !== action.data)
    default:
      return state
  }
}

export const initOrderLines = () => {
  return async dispatch => {
    const orderLines = await orderLineService.getAll()
    dispatch({
      type: 'INIT_ORDERLINES',
      data: orderLines,
    })
  }
}

export const createOrderLine = content => {
  return async dispatch => {
    const newOrderLine = await orderLineService.create(content)
    dispatch ({
      type: 'NEW_ORDERLINE',
      data: newOrderLine,
    })
  }
}

export const deleteOrderLine = (id) => {
    return async dispatch => {
      await orderLineService.remove(id)
      dispatch ({
        type: 'REMOVE_ORDERLINE',
        data: id
      })
    }
  }

export default reducer