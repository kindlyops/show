import React from 'react';
import { Link } from 'gatsby';
import { getCurrentUser } from '../utils/auth';

const Home = () => {
  const user = getCurrentUser()
  console.log('user:', user)
  return (
    <div>
      <h1>Profile Details</h1>
      <p>Email: {user.email}</p>
      <Link to="/app/home">Home</Link>
    </div>
  )
}

export default Home