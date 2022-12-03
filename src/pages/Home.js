import React from 'react'
import AuthStatus from '../components/AuthStatus'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Public Home Page</h1>
      <h2>Provisional Public Home Page</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, est ipsum laboriosam eveniet deleniti obcaecati fugiat nostrum sequi, quisquam inventore quibusdam quaerat ipsa, aspernatur assumenda a eum rerum illum. Unde?</p>
      <Link to='/login'>Log in</Link><br />
      <Link to='/dashboard'>Dashboard</Link><br />
      <Link to='/inventory'>Inventario</Link><br />
      <AuthStatus />
    </div>
  )
}

export default Home
