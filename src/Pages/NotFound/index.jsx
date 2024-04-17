import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {  
  return (
    <div style={{ textAlign: 'center', marginTop: '15%'}}>
      <div style={{ fontSize: '3rem'}}>404</div>
      <p style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Oops! The page you are looking for could not be found.</p>
      <Link to={{ pathname: '/'}} style={{ color: '#2f2f2f' }}>Go back to the home page</Link>
    </div>
  )
}

export default NotFound