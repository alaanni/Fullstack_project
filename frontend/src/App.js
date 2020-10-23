import React, { useState, useEffect } from 'react'
import Order from './Order/Order'
import Customer from './Customer/Customer'
import loginService from './services/login'
import orderService from './services/orders'
import LoginForm from './components/LoginForm'
import CustomerList from './Customer/CustomerList'
import Notification from './components/Notification'
import OrderList from './Order/OrderList'
import Home from './components/Home'
import {
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useHistory
} from "react-router-dom"
import { Navbar, Nav } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { initCustomers } from './reducers/customerReducer'
import { newNotification } from './reducers/notificationReducer'
import { initOrders, deleteOrder } from './reducers/orderReducer'


const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [error, setError] = useState(false)

  const dispatch = useDispatch()
  const history = useHistory()

  const message = useSelector(state => state.message)
  const orders = useSelector(state => state.orders)
  const customers = useSelector(state => state.customers)
  
  useEffect(() => {
    dispatch(initCustomers())
    dispatch(initOrders())
  }, [dispatch])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      orderService.setToken(user.token)
    }
  }, [])


  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )

      orderService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setError(true)
      dispatch(newNotification('wrong credentials', 5))
    }
    history.push("/home")
  }

  const handleLogout = () => {
    window.localStorage.removeItem('loggedUser')
    setUser(null)
  }

  const removeOrder = (id) => {
    const order = orders.find(order => order.id === id)
    if (window.confirm(`Removing order from ${order.customer.name}`)) {
      dispatch(deleteOrder(id))
        .catch(() => {
          setError(true)
          dispatch(newNotification(`Order ${order.id} from ${order.customer.name} was already deleted from server`, 5))
        })
      setError(false)
      dispatch(newNotification(`Deleted order ${order.id} from ${order.customer.name}`, 5))
    }
    history.push("/orders")
  }

  const matchOrder = useRouteMatch('/orders/:id')
  const order = matchOrder 
    ? orders.find(order => order.id === matchOrder.params.id)
    : null

  const matchCustomer = useRouteMatch('/customers/:id')
  const customer = matchCustomer 
    ? customers.find(customer => customer.id === matchCustomer.params.id)
    : null

  return (
    <div className="container">
      <Notification message={message} error={error} />

      <Navbar collapseOnSelect expand="lg" bg="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#" as="span">
              {user ? <Link to="/">home</Link> : null}
            </Nav.Link>
            <Nav.Link href="#" as="span">
              {user ? <Link to="/orders">orders</Link> : null}
            </Nav.Link>
            <Nav.Link href="#" as="span">
              {user ? <Link to="/customers">customers</Link> : null}
            </Nav.Link>
            <Nav.Link href="#" as="span">
              {user
                ? <em>{user.name} logged in 
                <button onClick={handleLogout}>logout</button></em>
                : <Link to="/login"></Link>
              }
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/orders/:id">
          <Order 
            order={order}
            removeOrder={removeOrder}
            />
        </Route>
        <Route path="/orders">
          {user ? <OrderList 
            user={user}
            />
            : <Redirect to="/login" />}
        </Route>
        <Route path="/customers/:id">
          <Customer 
            customer={customer}
            />
        </Route>
        <Route path="/customers">
          {user ? <CustomerList />
            : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          {!user ? 
          <LoginForm
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            handleLogin={handleLogin} 
            /> : <Redirect to="/home" />}
        </Route>
        <Route path="/">
          {user ? <Home /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </div>
  )
}

export default App