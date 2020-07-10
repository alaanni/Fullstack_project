import React, { useState, useEffect } from 'react'
import Order from './components/Order'
import Customer from './components/Customer'
import loginService from './services/login'
import customerService from './services/customers'
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

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [orders, setOrders] = useState([])
  const [customers, setCustomers] = useState([])
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(false)

  const updateAll = () => {
    orderService.getAll().then(orders =>
      setOrders(orders)
    )
    customerService.getAll().then(customers =>
      setCustomers(customers)
    )
  }

  useEffect(() => {
    updateAll()
  }, [])

  // sort orders by status and/or date

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
      setMessage('wrong credentials')
      setTimeout(() => {
        setMessage(null)
        setError(false)
      }, 5000)
    }
  }

  const handleLogout = () => {
    window.localStorage.removeItem('loggedUser')
    setUser(null)
  }

  /*
  const giveLikes = (id) => {
    const blog = blogs.find(blog => blog.id === id)
    const likedBlog = { ...blog, likes: blog.likes + 1 }

    blogService
      .update(likedBlog)
      .then(returnedBlog => {
        setBlogs(blogs.map(blog => blog.id !== id ? blog : likedBlog))
      })
      .catch(error)
  }
  */

  const removeOrder = (id) => {
    const order = orders.find(order => order.id === id)
    if (window.confirm(`Removing order from ${order.customer}`)) {
      orderService
        .remove(order)
        .catch(error => {
          setError(true)
          setMessage(`Order ${order.id} from ${order.customer} was already deleted from server`)
        })
      setError(false)
      setMessage(
        `Deleted order ${order.id} from ${order.customer}`
      )
      setTimeout(() => {
        setMessage(null)
      }, 4000)

      setOrders(orders.filter(order =>
        order.id !== id))
    }
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
            setCustomers={setCustomers}
            setMessage={setMessage}
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