import React, { useState, useEffect } from 'react'
import Order from './components/Order'
import orderService from './services/orders'
import customerService from './services/customers'
import loginService from './services/login'
import OrderForm from './components/OrderForm'
import LoginForm from './components/LoginForm'
import CustomerForm from './components/CustomerForm'
import CustomerList from './components/CustomerList'
import Notification from './components/Notification'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [orders, setOrders] = useState([])
  const [customers, setCustomers] = useState([])
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(false)
  const [page, setPage] = useState('orders')

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

  const addOrder = (orderObject) => {
    orderService
      .create(orderObject)
      .then(returnedOrder => {
        setOrders(orders.concat(returnedOrder))
        setMessage(
          `Added new order from ${returnedOrder.customer}`
        )
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
  }
  const addCustomer = (customerObject) => {
    customerService
      .create(customerObject)
      .then(returnedCustomer => {
        setCustomers(customers.concat(returnedCustomer))
        setMessage(
          `Added new customer ${returnedCustomer.name}`
        )
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
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

  return (
    <div className="container">
      <Notification message={message} error={error} />

      {user === null ?
        <LoginForm
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handleLogin={handleLogin}
        /> 
        :
        <div>
          <p>{user.name} logged in <button onClick={handleLogout}>logout</button></p>
          
          <div>
          <button onClick={() => setPage('orders')}>home</button>
          <button onClick={() => setPage('new order')}>new order</button>
          <button onClick={() => setPage('customers')}>customers</button>
          <button onClick={() => setPage('new customer')}>new customer</button>
          </div>

          <h2>orders</h2>
          
          {orders.map(order =>
            <Order
              key={order.id}
              order={order}
              removeOrder={removeOrder}
              user={user}
            />
          )}

          <OrderForm 
            show={page === 'new order'}
            customers={customers}
            createOrder={addOrder} 
            user={user}
            />

          <CustomerForm
            show={page === 'new customer'}
            createCustomer={addCustomer}
            />

          <CustomerList 
            show={page === 'customers'}
            customers={customers}
            />

        </div>
      }
    </div>
  )
}

export default App