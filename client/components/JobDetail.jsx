import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { useAuth0 } from '@auth0/auth0-react'

import { useParams } from 'react-router-dom'
import { fetchJobByID, acceptJob } from '../actions'

import { Heading, Box, Text, Button, useColorModeValue } from '@chakra-ui/react'
import { SkipNavContent } from '@chakra-ui/skip-nav'

export default function JobDetail() {
  const { id } = useParams()

  const { job, loading } = useSelector((state) => state.jobs)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const { isAuthenticated, user } = useAuth0()

  const handleAcceptJob = () => {
    dispatch(acceptJob(id, user.sub))
    navigate('/myJobs')
  }

  useEffect(() => {
    dispatch(fetchJobByID(id))
  }, []) // you probably want to call this code whenever id changes

  if (!isAuthenticated) return <p>Please login to see this job</p>
  if (loading) return <p>Loading...</p>
  return (
    <SkipNavContent id="job-detail-content">
      <Box
        borderWidth="1px"
        p={2}
        shadow="md"
        overflow="hidden"
        w="100%"
        borderRadius="lg"
        bg={useColorModeValue('gray.50', 'gray.600')}
      >
        <Heading as="h2" m={4}>
          {job.title}
        </Heading>
        <Box textAlign="left" m={2}>
          <Heading as="h3" fontSize="lg" fontWeight="bold">
            Description:
          </Heading>
          <Text>{job.description}</Text>
        </Box>

        <Box textAlign="left" m={2}>
          <Heading as="h3" fontSize="lg" fontWeight="bold">
            Region:
          </Heading>
          <Text>{job.region}</Text>
        </Box>

        
        <Box textAlign="left" m={2}>
          <Heading as="h3" fontSize="lg" fontWeight="bold">
            Type:
          </Heading>
            {job.type == 'paid' ?
              <Text>Paid : ${job.pay}/hr</Text>
            :
              <Text>Voluntary role</Text>
            }
        </Box>
        
        
        <Box textAlign="left" m={2}>
          <Heading as="h3" fontSize="lg" fontWeight="bold">
            Requirements:
          </Heading>
          <Text>{job.requirements}</Text>
        </Box>

        <Box textAlign="left" m={2}>
          <Text fontWeight="bold">For more information, contact:</Text>
          {job.email}
        </Box>
        {job.accepted ? (
          <Text fontWeight="bold">This position has been filled</Text>
        ) : (
          <Button m={2} onClick={handleAcceptJob} colorScheme="teal">
            Accept Job
          </Button>
        )}
      </Box>
    </SkipNavContent>
  )
}
