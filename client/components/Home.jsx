import React from 'react'

import { Link } from 'react-router-dom'

import { Heading, Text} from '@chakra-ui/react'

function Home() {

  return (
    <>
      <Heading>Welcome</Heading>
      <br />
      <Text>Are you looking for work, or needing a job done? </Text>
      <br />
      <Link to='/alljobs' aria-label='find jobs to be done' p={20}>See which jobs are available</Link>
      <br />
      <Link to='/postjob' aria-label='post a new job' p={20}>Post a new job </Link>

    </>
  )
}

export default Home