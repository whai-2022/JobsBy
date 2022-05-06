import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

const LoggedIn = () => {
  const { isLoggedIn, logout, redirect } = useAuth0()

  const signOut = () => {
    logout({ returnTo: window.location.origin })
  }

  function signIn() {
    redirect()
  }

  return (
    <div className='login'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link to='/allJobs'>Jobs</Link>
            </li>
          )}
        </ul>
      </nav>
      {LoggedIn && (
        <p> See the jobs </p>
      )}
      {LoggedIn ? (
        <>
          <button onClick={signOut}>
            Logout
            </button>
        </>
      ) : (
        <button onClick={signIn}>
          Login
        </button>
      )}
    </div>
  )
}

export default LoggedIn