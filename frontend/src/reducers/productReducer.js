import productService from '../services/productService'

const reducer = (state = [], action) => {
  
  switch(action.type) {
    case 'INIT_PRODUCTS':
      return action.data
    case 'NEW_PRODUCT':
      return [...state, action.data]
    case 'REMOVE_PRODUCT':
        return state.filter(orderLine => orderLine.id !== action.data)
    default:
      return state
  }
}

export const initProducts = () => {
  return async dispatch => {
    const products = await productService.getAll()
    dispatch({
      type: 'INIT_PRODUCTS',
      data: products,
    })
  }
}

export const createProduct = content => {
  return async dispatch => {
    const newProduct = await productService.create(content)
    dispatch ({
      type: 'NEW_PRODUCT',
      data: newProduct,
    })
  }
}

export const deleteProduct = (id) => {
    return async dispatch => {
      await productService.remove(id)
      dispatch ({
        type: 'REMOVE_PRODUCT',
        data: id
      })
    }
  }

export default reducer