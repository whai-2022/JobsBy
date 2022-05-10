import { Container, Heading, Text, Stack, Image } from '@chakra-ui/react'
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
          <Heading fontWeight={650} 
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'} color='#666666'>
          Welcome to JobsBy
          </Heading>
          <Heading fontWeight={650} >
            <Text as={'span'} color={'teal.400'}>
                Find big jobs, small jobs, and everything in between in your neighbourhood.
              </Text>
              </Heading>

          </Stack>
          <Stack
          spacing={{ base: 12, md: 15 }}
          py={{ base: 12, md: 15 }}>
              <LoggedIn />
              </Stack>

        <Stack         
        align={'center'}
        spacing={{ base: 5, md: 5 }}
        py={{ base: 2, md: 2 }}
        boxSize='90%'>
        <Image src= 'images/group1.png'></Image>
        </Stack>

      </Container>
    </SkipNavContent>
  )
}

export default Splash
