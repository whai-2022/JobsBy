import { Container, Heading, Text, Stack } from '@chakra-ui/react'
import React from 'react'
import LoggedIn from './LoggedIn'
import { SkipNavContent } from '@chakra-ui/skip-nav'

function Splash() {
  return (
    <SkipNavContent>
      <Container maxW="container.sm">
        <br></br>
        <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 5, md: 5 }}
        py={{ base: 20, md: 28 }}>
          <Heading fontWeight={600} 
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Welcome to JobsBy
          </Heading>
          <Heading>
            <Text as={'span'} color={'teal.400'}>
                Find big jobs, small jobs, and everything in between in your neighbourhood.
              </Text>
              </Heading>
          </Stack>
          
        <LoggedIn />
      </Container>
    </SkipNavContent>
  )
}

export default Splash
