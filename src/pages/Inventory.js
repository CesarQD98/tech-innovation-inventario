import React from 'react'
import AuthStatus from '../components/AuthStatus'

function Inventory() {
  return (
    <div>
      <h1>Inventory Page</h1>
      <h2>TODO list:</h2>
      <ul>
        <li>Add react-table dependencies</li>
        <li>Create connection to products db</li>
      </ul>
      <AuthStatus />
    </div>
  )
}

export default Inventory