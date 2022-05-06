import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

const LoggedIn = () => {
  const { isAuthenticated, user, logout, loginWithRedirect } = useAuth0()

  const signOut = () => {
    logout({ returnTo: window.location.origin })
  }

  function signIn() {
    console.log('sign in clicked', isAuthenticated)
    loginWithRedirect()
  }

  return (
    <div className='login'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link to='/allJobs'>Jobs</Link>
            </li>
          )}
        </ul>
      </nav>
      {isAuthenticated && (
        <p> {`Welcome back, ${user.email}`} </p>
      )}
      {isAuthenticated ? (
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