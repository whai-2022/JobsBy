import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link as LinkTo} from 'react-router-dom'
import { Button, Container, Box, Link } from '@chakra-ui/react'

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
    <Container className='login'>
      {isAuthenticated && (
        <p> {`Welcome back, ${user.email}`} </p>
      )}
      <Box m={4}>
          {isAuthenticated && (
            <Link as={LinkTo} to='/home' aria-label='Enter jobsby website'><Button>Enter</Button></Link>
          )}
      </Box>
      {isAuthenticated ? (
        <>
          <Button onClick={signOut}>
            Logout
          </Button>
        </>
      ) : (
        <Button onClick={signIn}>
          Login
        </Button>
      )}
      
    </Container>
  )
}

export default LoggedIn