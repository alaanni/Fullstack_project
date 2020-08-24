import customerService from '../services/customers'

const reducer = (state = [], action) => {

  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case 'INIT_CUSTOMERS':
      return action.data
    case 'NEW_CUSTOMER':
      return [...state, action.data]
    default:
      return state
  }
}

export const initCustomers = (customers) => {
  return async dispatch => {
    const customers = await customerService.getAll()
    dispatch({
      type: 'INIT_CUSTOMERS',
      data: customers,
    })
  }
}

export const createCustomer = content => {
  return async dispatch => {
    const newCustomer = await customerService.create(content)
    dispatch ({
      type: 'NEW_CUSTOMER',
      data: newCustomer,
    })
  }
}

export default reducer