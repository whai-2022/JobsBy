import { Container, Text, Stack, Box, LinkBox } from '@chakra-ui/react'
import React from 'react'
import { SkipNavContent } from '@chakra-ui/skip-nav'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <SkipNavContent>
    <Box
      bgColor='teal.50'
      color='teal.600'>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={3}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>

        <Stack direction={'row'} spacing={6}>
        <LinkBox maxW='sm' p='5'>
          <Link to="/home">Home</Link>
          </LinkBox>
          <LinkBox maxW='sm' p='5'>
          <Link to="/home">Contact</Link>
          </LinkBox>

          <LinkBox maxW='sm' p='5'>
          <Link to="/home">How to use this website</Link>
          </LinkBox>
          </Stack>

 
        <Text><em>Community for community</em></Text>
      </Container>
    </Box>
    </SkipNavContent>
  )
}

export default Footer
