import orderService from '../services/orderService'

const reducer = (state = [], action) => {

  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case 'INIT_ORDERS':
      return action.data
    case 'NEW_ORDER':
      return [...state, action.data]
    case 'REMOVE_ORDER':
        return state.filter(order => order.id !== action.data)
    default:
      return state
  }
}

export const initOrders = (orders) => {
  return async dispatch => {
    const orders = await orderService.getAll()
    dispatch({
      type: 'INIT_ORDERS',
      data: orders,
    })
  }
}

export const createOrder = content => {
  return async dispatch => {
    const newOrder = await orderService.create(content)
    dispatch ({
      type: 'NEW_ORDER',
      data: newOrder,
    })
  }
}

export const deleteOrder = (id) => {
    return async dispatch => {
      await orderService.remove(id)
      dispatch ({
        type: 'REMOVE_ORDER',
        data: id
      })
    }
  }

export default reducer