import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
        <h1>Error</h1>
        <p>Sorry, there was an error processing your request.</p>
        <Link to="/Homepage">Go back home</Link>
    </div>
  )
}

export default Error