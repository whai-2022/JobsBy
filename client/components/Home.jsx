import React from 'react'

import { Link as LinkTo } from 'react-router-dom'

import {
  Heading,
  Text,
  Link,
  Box,
  Center,
  Stack,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'
import { SkipNavContent } from '@chakra-ui/skip-nav'

function Home() {
  return (
    <>
      <SkipNavContent>
        <Stack direction={'row'} spacing={6} justify="center" pb={85}>
          <Heading
            fontSize="3xl"
            alignSelf="center"
            color={useColorModeValue('teal.400', 'teal.300')}
          >
            Getting started
          </Heading>
          <Box
            align={'center'}
            spacing={{ base: 5, md: 5 }}
            py={{ base: 2, md: 2 }}
            boxSize="60%"
          >
            <Image
              src="images/washing.png"
              alt="drawing of 3 people in teal clothes doing jobs: ironing, yardwork, folding towels"
            ></Image>
          </Box>
        </Stack>
        <br />
        <Text
          fontWeight={500}
          color={useColorModeValue('gray.600', 'blue.200')}
          maxW={'3x1'}
        >
          Would you like to find a job for yourself or post one for someone else
          to take on?
        </Text>
        <br />
        <Center>
          <Box
            p={4}
            s={6}
            borderRadius="lg"
            bg={useColorModeValue('gray.50', 'purple.900')}
            w="66%"
            // alignSelf="center"
            borderColor="teal.400"
            borderWidth="1px"
          >
            <Link
              as={LinkTo}
              color={useColorModeValue('teal.500', 'teal.300')}
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
              color={useColorModeValue('teal.500', 'teal.300')}
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
              color={useColorModeValue('teal.500', 'teal.300')}
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
