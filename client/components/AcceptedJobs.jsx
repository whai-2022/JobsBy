import React, { useEffect } from 'react'
import { fetchAcceptedJobs } from '../actions'
import { Link as LinkTo } from 'react-router-dom'
import { MdVolunteerActivism } from 'react-icons/md'
import { FaHandHoldingUsd } from 'react-icons/fa'

import {
  Heading,
  VStack,
  LinkBox,
  Box,
  Badge,
  Spacer,
  Icon,
  Circle,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

function AcceptedJobs() {
  const { acceptedJobs } = useSelector((state) => state.myJobs)
  const { isAuthenticated, user } = useAuth0()

  const dispatch = useDispatch()

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchAcceptedJobs(user.sub))
    }
  }, [])

  return (
    <>
      <Box>
      <Heading m={6} fontSize='lg'>Here are the jobs you have accepted:</Heading>

      {acceptedJobs.length > 0 ? (
        <VStack spacing={6}>
          {acceptedJobs?.map((jobPosting, i) => {
            return (
              <LinkBox
                as={LinkTo}
                to={`/alljobs/${jobPosting.id}`}
                p={3}
                shadow="md"
                bg={useColorModeValue('gray.50', 'gray.600')}
                overflow="hidden"
                borderWidth="1px"
                w="100%"
                borderRadius="lg"
                key={`${jobPosting.id} ${i}`}
              >
                <Box p={2} display="flex" alignItems="baseline">
                  <Badge borderRadius="full" px="2" colorScheme="purple">
                    {jobPosting.accepted ? 'Accepted' : 'Awaiting Response'}
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
                    {jobPosting.type == 'paid' ?
                  <Box
                    fontSize="s"
                    alignContent="right"
                  > 
                    <Circle size='40px' bg='teal.600' color='white'>
                      <Icon
                        as={FaHandHoldingUsd}
                        boxSize={5}
                      />
                    </Circle>
                  </Box>
          :       <Box
                    fontSize="s"
                    alignContent="right"
                  >      
                    <Circle size='40px' bg='blue.600' color='white' >
                      <Icon
                        as={MdVolunteerActivism}
                        boxSize={5}
                      />
                    </Circle>
                  </Box>}
                </Box>
                <Box mt={1} fontWeight="bold" fontSize="xl">
                  {jobPosting.title}
                </Box>
                {jobPosting.type == 'paid' ?
                  <Box fontSize='sm'>
                    ${jobPosting.pay}/hr
                  </Box>
                : <Text fontSize='sm'>Voluntary Role</Text>
                }
                <Box m={2}>
                  {jobPosting.date}
                </Box>
              {/* <button className='button' onClick={handleClick}>Delete</button> */}
            </LinkBox>
          )
        })}
    </VStack>
        ) : <p>No jobs</p>}
    </Box>
    </>
  )
}

export default AcceptedJobs
