import { Container, Heading } from '@chakra-ui/react'
import React from 'react'

function Splash(){

  return (
    <Container maxW='container.sm'>
      <div>
      <br></br>
        <Heading fontWeight='fontWeights.bold'>
          Welcome.
        </Heading>
        
      <p>JobsBy is an app to post and find jobs in your neighbourhood.</p>
      {/* TODO: Button or link & Auth0 */}
      <p>Please Log In or Sign Up</p>
      </div>
    </Container>
  )
}

export default Splash