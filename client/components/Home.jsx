import React from 'react'

import { Link } from 'react-router-dom'

import { Heading, Text} from '@chakra-ui/react'

function Home() {

  return (
    <>
      <Heading>Welcome.</Heading>
      <br />
      <Text fontSize='lg'>Would you like to find a job to do, or post one for someone else to take on?</Text>
      <br />
      <Link color='teal.500' to='/alljobs' aria-label='find available jobs'>Find a job</Link>
      <br />
      <Link color='teal.500' to='/postjob' aria-label='post a new job'>Post a new job </Link>

    </>
  )
}

export default Home