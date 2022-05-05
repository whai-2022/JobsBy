import React from 'react'

import { Link } from 'react-router-dom'

import { Heading, Text} from '@chakra-ui/react'

function Home() {

  return (
    <>
      <Heading>Welcome</Heading>
      <br />
      <Text>Please choose your option:</Text>
      <br />
      <Link to='/alljobs' aria-label='all jobs'>See all jobs available</Link>
      <br />
      <Link to='/postjob' aria-label='post job'>Post a new job </Link>

    </>
  )
}

export default Home