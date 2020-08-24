import React, { useState, useEffect } from 'react'
import Order from './components/Order'
import Customer from './components/Customer'
import loginService from './services/login'
import orderService from './services/orders'
import LoginForm from './components/LoginForm'
import CustomerList from './components/CustomerList'
import Notification from './components/Notification'
import OrderList from './components/OrderList'
import Home from './components/Home'
import {
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useHistory
} from "react-router-dom"
import { Table, Form, Button, Alert, Navbar, Nav } from 'react-bootstrap'
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
  
  useEffect(() => {
    dispatch(initCustomers())
    dispatch(initOrders())
  }, [dispatch])

  const customers = useSelector(state => state.customers)
  const orders = useSelector(state => state.orders)
  const message = useSelector(state => state.message)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      orderService.setToken(user.token)
    }
  }, [])

  const history = useHistory()

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
      dispatch(newNotification('wrong credentials'))
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
          dispatch(newNotification(`Order ${order.id} from ${order.customer.name} was already deleted from server`))
        })
      setError(false)
      dispatch(newNotification(`Deleted order ${order.id} from ${order.customer.name}`))
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
              <Link to="/">home</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link to="/orders">orders</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link to="/customers">customers</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              {user
                ? <em>{user.name} logged in 
                <button onClick={handleLogout}>logout</button></em>
                : <Link to="/login">login</Link>
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
            user={user} 
            />
        </Route>
        <Route path="/orders">
          {user ? <OrderList 
            orders={orders}
            customers={customers}
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
          {user ? <CustomerList
            customers={customers}
            />
            : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <LoginForm
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            handleLogin={handleLogin} 
            />
        </Route>
        <Route path="/">
          {user ? <Home /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </div>
  )
}

export default App