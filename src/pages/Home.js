import React from 'react'
import AuthStatus from '../components/AuthStatus'
import { Link } from 'react-router-dom'

const Home = () => {


  return (
    <div>
      <h1>Public Home Page</h1>
      <h2>Provisional Public Home Page</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, est ipsum laboriosam eveniet deleniti obcaecati fugiat nostrum sequi, quisquam inventore quibusdam quaerat ipsa, aspernatur assumenda a eum rerum illum. Unde?</p>
      <ul>
        <li>
          <Link to='/login'>Log in</Link>
        </li>
      </ul>
      <AuthStatus />
    </div>
  )
}

export default Home
