import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const CustomerForm = ({ 
  createCustomer, 
  show 
  }) => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [comment, setComment] = useState('')

  if (!show) {
    return null
  }

  const addCustomer = (event) => {
    event.preventDefault()
    createCustomer({
      name,
      phone,
      email,
      street,
      city,
      postalCode,
      comment
    })
  }

  return (
    <div>
    <h2>new customer</h2>
    <Form onSubmit={addCustomer}>
      <Form.Group>
        <Form.Label>name:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          onChange={({ target }) => setName(target.value)}
        />
        <Form.Label>phone:</Form.Label>
        <Form.Control
          type="phone"
          onChange={({ target }) => setPhone(parseInt(target.value))}
        />
        <Form.Label>email:</Form.Label>
        <Form.Control
          type="email"
          onChange={({ target }) => setEmail(target.value)}
        />
        <Form.Label>street:</Form.Label>
        <Form.Control
          type="text"
          name="street"
          onChange={({ target }) => setStreet(target.value)}
        />
        <Form.Label>city:</Form.Label>
        <Form.Control
          type="text"
          name="city"
          onChange={({ target }) => setCity(target.value)}
        />
        <Form.Label>postal code:</Form.Label>
        <Form.Control
          type="postalCode"
          onChange={({ target }) => setPostalCode(parseInt(target.value))}
        />
        <Form.Label>add comment:</Form.Label>
        <Form.Control
          type="text"
          name="comment"
          onChange={({ target }) => setComment(target.value)}
        />
        <Button variant="primary" type="submit">
          add new customer
        </Button>
      </Form.Group>
    </Form>
    </div>
  )
}

export default CustomerForm