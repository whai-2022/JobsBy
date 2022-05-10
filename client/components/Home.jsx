import React from 'react'

import { Link as LinkTo } from 'react-router-dom'

import { Heading, Text, Link, Box} from '@chakra-ui/react'
import { SkipNavContent } from '@chakra-ui/skip-nav'

function Home() {
  return (
    <>
      <SkipNavContent>
        <Heading as="h1" size="xl" alignSelf="center">Welcome.</Heading>
        <br />
        <Text fontSize="lg">
          Would you like to find a job to do, or post one for someone else to
          take on?
        </Text>
        <br />
        <Box
          p={2}
          s={4}
          borderRadius="lg"
          bg="gray.50"
        >
        <Link
          as={LinkTo}
          color="teal.500"
          to="/alljobs"
          aria-label="find available jobs"
        >
          Find a job
        </Link>
        <br />
        <Link
          as={LinkTo}
          color="teal.500"
          to="/postjob"
          aria-label="post a new job"
        >
          Post a new job{' '}
        </Link>
        <br />
        <Link
          as={LinkTo}
          color="teal.500"
          to="/myJobs"
          aria-label="post a new job"
        >
          My jobs{' '}
        </Link>
        </Box>
      </SkipNavContent>
    </>
  )
}

export default Home
