import React from 'react'
import { connect } from 'react-redux'

const Notification = ({ message, error }) => {
  if (message === '') {
    return null
  }

  return (
    <div className={error ? 'error' : 'notification'}>
      {message}
    </div>
  )
}

const mapStateToProps = (state) => {
  if (state.notification.content === null) {
    return null
  }
  return {
    message: state.notification.content
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification