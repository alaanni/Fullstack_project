import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'react-bootstrap'

const LoginForm = ({
  handleLogin,
  setUsername,
  setPassword
}) => {
  return (
    <div>
    <h2>login</h2>
    <Form onSubmit={handleLogin}>
      <Form.Group>
        <Form.Label>username:</Form.Label>
        <Form.Control
          type="text"
          name="username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <Form.Label>password:</Form.Label>
        <Form.Control
          type="password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button variant="primary" type="submit">
          login
        </Button>
      </Form.Group>
    </Form>
  </div>
  )
}
LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default LoginForm