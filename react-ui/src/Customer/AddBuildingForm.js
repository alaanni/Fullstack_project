import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const AddBuildingForm = ({ show, createBuilding, customer }) => {

  const [type, setType] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [comment, setComment] = useState('')

  if (!show) {
    return null
  }

  const addBuilding = (event) => {
    event.preventDefault()
    createBuilding({
      customer,
      type,
      street,
      city,
      postalCode,
      comment
    })

  }

  return (
    <div>
    <h2>New building</h2>
    <Form onSubmit={addBuilding}>
      <Form.Group>
        <Form.Label>Type</Form.Label>
        <Form.Control
          type="text"
          name="type"
          onChange={({ target }) => setType(target.value)}
        />
        <Form.Label>Street</Form.Label>
        <Form.Control
          type="text"
          name="street"
          onChange={({ target }) => setStreet(target.value)}
        />
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          name="city"
          onChange={({ target }) => setCity(target.value)}
        />
        <Form.Label>Postal code</Form.Label>
        <Form.Control
          type="postalCode"
          onChange={({ target }) => setPostalCode(parseInt(target.value))}
        />
        <Form.Label>Add comment</Form.Label>
        <Form.Control
          type="text"
          name="comment"
          onChange={({ target }) => setComment(target.value)}
        />
        <Button variant="primary" type="submit">
          Add building
        </Button>
      </Form.Group>
    </Form>
    </div>
  )
}

export default AddBuildingForm