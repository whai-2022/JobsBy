import {
  Container,
  Heading,
  Text,
  Stack,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'
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
          py={{ base: 20, md: 28 }}
          // pt={{ base: 20, md: 28 }}
          // pb={{ base: 5, md: 28 }}
        >
          <Heading
            fontWeight={650}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            color={useColorModeValue('#666666', 'blue.200')}
          >
            Welcome to JobsBy
          </Heading>
          <Heading fontWeight={650}>
            <Text as={'span'} color={'teal.400'}>
              Find big jobs, small jobs, and everything in between in your
              neighbourhood.
            </Text>
          </Heading>
        </Stack>
        <Stack spacing={{ base: 12, md: 15 }} py={{ base: 12, md: 15 }}>
          <LoggedIn />
        </Stack>

        <Stack
          align={'center'}
          spacing={{ base: 5, md: 5 }}
          py={{ base: 2, md: 2 }}
          boxSize="90%"
        >
          <Image
            src="images/group.png"
            alt="group of 6 people wearing teal and purple, doing various community jobs"
          ></Image>
        </Stack>
      </Container>
    </SkipNavContent>
  )
}

export default Splash
