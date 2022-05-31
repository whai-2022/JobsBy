import React, { useEffect } from 'react'
import { fetchUserJobs } from '../actions'
import { Link as LinkTo } from 'react-router-dom'
import { MdVolunteerActivism } from 'react-icons/md'
import { FaHandHoldingUsd } from 'react-icons/fa'

import AcceptedJobs from './AcceptedJobs'
import LoggedIn from './LoggedIn'

import {
  Heading,
  VStack,
  LinkBox,
  Box,
  Badge,
  Spacer,
  Stack,
  Circle,
  Text,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react' // TODO: Text, Button add later - to go to full job desc.
import { SkipNavContent } from '@chakra-ui/skip-nav'
import { useSelector, useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

function MyJobs() {
  const { isAuthenticated, user } = useAuth0()

  const { myJobs } = useSelector((state) => state.myJobs)
  // myJobs = {jobs = [res.body/actual jobs]}
  console.log(myJobs)

  const dispatch = useDispatch()
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchUserJobs(user.sub))
    }
  }, [isAuthenticated])

  if (!isAuthenticated)
    return (
      <p>
        Please login to view your jobs. <LoggedIn />
      </p>
    )
  return (
    <>
      <SkipNavContent id="my-jobs-content">
        <Heading m={6} as="h2">
          My Jobs
        </Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={6}
          justify="center"
        >
          <AcceptedJobs />
          <Box>
            <Heading m={6} fontSize="lg">
              Here are the jobs you have posted:
            </Heading>
            {myJobs.length > 0 ? (
              <VStack spacing={6}>
                {myJobs?.map((jobPosting, i) => {
                  return (
                    <LinkBox
                      as={LinkTo}
                      to={`/alljobs/${jobPosting.id}`}
                      p={3}
                      shadow="md"
                      overflow="hidden"
                      borderWidth="1px"
                      bg={useColorModeValue('gray.50', 'gray.600')}
                      w="100%"
                      borderRadius="lg"
                      key={`${jobPosting.id} ${i}`}
                    >
                      <Box p={2} display="flex" alignItems="baseline">
                        <Badge
                          borderRadius="full"
                          px="2"
                          colorScheme={jobPosting.accepted ? 'purple' : 'blue'}
                        >
                          {jobPosting.accepted
                            ? 'Accepted'
                            : 'Awaiting Response'}
                        </Badge>
                        <Box
                          color={useColorModeValue('gray.500', 'blue.300')}
                          fontWeight="semibold"
                          letterSpacing="wide"
                          fontSize="xs"
                          textTransform="uppercase"
                          ml="2"
                        >
                          {jobPosting.region}
                        </Box>
                        <Spacer />
                        {jobPosting.type == 'paid' ? (
                          <Box fontSize="s" alignContent="right">
                            <Circle size="40px" bg="teal.600" color="white">
                              <Icon as={FaHandHoldingUsd} boxSize={5} />
                            </Circle>
                          </Box>
                        ) : (
                          <Box fontSize="s" alignContent="right">
                            <Circle size="40px" bg="blue.600" color="white">
                              <Icon as={MdVolunteerActivism} boxSize={5} />
                            </Circle>
                          </Box>
                        )}
                      </Box>
                      <Box mt={1} fontWeight="bold" fontSize="xl">
                        {jobPosting.title}
                      </Box>
                      {jobPosting.type == 'paid' ? (
                        <Box fontSize="sm">${jobPosting.pay}/hr</Box>
                      ) : (
                        <Text fontSize="sm">Voluntary Role</Text>
                      )}
                      <Box m={2}>{jobPosting.date}</Box>
                      {/* <button className='button' onClick={handleClick}>Delete</button> */}
                    </LinkBox>
                  )
                })}
              </VStack>
            ) : (
              <p>No jobs.</p>
            )}
          </Box>
        </Stack>
      </SkipNavContent>
    </>
  )
}

export default MyJobs
