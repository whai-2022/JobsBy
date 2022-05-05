import React from 'react'

import { Link } from 'react-router-dom'

// import Nav from './Nav'

function Home() {

  return (
    <div>
      <h1>Welcome</h1>
      <br />
      <p>Please choose your option:</p>
      <br />
      <Link to='/alljobs' aria-label='all jobs'>See all jobs available</Link>
      <br />
      <Link to='/postjob' aria-label='post job'>Post a new job </Link>
    </div>
  )
}

export default Home