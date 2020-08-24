
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import customerReducer from './reducers/customerReducer'
import notificationReducer from './reducers/notificationReducer'
import orderReducer from './reducers/orderReducer'

const reducer = combineReducers({
    customers: customerReducer,
    orders: orderReducer,
    notification: notificationReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store