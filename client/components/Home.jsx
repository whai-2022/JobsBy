import React from 'react'

import { Link as LinkTo } from 'react-router-dom'

import { Heading, Text, Link, Box, Center} from '@chakra-ui/react'
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
        <Center>
          <Box
          p={4}
          s={6}
          borderRadius="lg"
          bg="gray.50"
          w="66%"
          // alignSelf="center"
          borderColor="cyan.400"
          borderWidth='1px'
        >
        <Link
          as={LinkTo}
          color="teal.500"
          to="/alljobs"
          aria-label="find available jobs"
          fontWeight="bold"
          m={6}
        >
          Find a job.
        </Link>
        <br />
        <Link
          as={LinkTo}
          color="teal.500"
          to="/postjob"
          aria-label="post a new job"
          fontWeight="bold"
          m={6}
        >
          Post a new job.{' '}
        </Link>
        <br />
        <Link
          as={LinkTo}
          color="teal.500"
          to="/myJobs"
          aria-label="post a new job"
          fontWeight="bold"
          m={6}
        >
          View my current jobs.{' '}
        </Link>
        </Box>
        </Center>
      </SkipNavContent>
    </>
  )
}

export default Home
