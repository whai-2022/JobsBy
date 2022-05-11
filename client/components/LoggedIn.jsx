import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link as LinkTo } from 'react-router-dom'
import {
  Button,
  Container,
  Box,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

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
    <Container className="login">
      {isAuthenticated && (
        <>
          <Text
            fontWeight={500}
            color={useColorModeValue('gray.600', 'purple.400')}
            maxW={'3x1'}
          >
            {' '}
            {`Hello again, ${user.email}`}{' '}
          </Text>
          <Text
            fontWeight={500}
            color={useColorModeValue('gray.600', 'purple.400')}
            maxW={'3x1'}
          >
            {' '}
            {`Press Enter below to find your next job`}{' '}
          </Text>
        </>
      )}
      <Box m={4}>
        {isAuthenticated && (
          <Link as={LinkTo} to="/home" aria-label="Enter JobsBy website">
            <Button colorScheme="purple">Enter</Button>
          </Link>
        )}
      </Box>
      {isAuthenticated ? (
        <>
          <Button onClick={signOut} colorScheme="purple">
            Logout
          </Button>
        </>
      ) : (
        <Button onClick={signIn} colorScheme="purple">
          Login / Sign Up
        </Button>
      )}
    </Container>
  )
}

export default LoggedIn
