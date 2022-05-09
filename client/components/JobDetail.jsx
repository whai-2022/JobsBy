import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { useAuth0 } from '@auth0/auth0-react'

import { useParams } from 'react-router-dom'
import { fetchJobByID, acceptJob } from '../actions'

import { Heading, Box, Text, Button} from '@chakra-ui/react'

export default function JobDetail() {
  const { id } = useParams()

  const { job, loading } = useSelector((state) => state.jobsReducer)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const { isAuthenticated, user } = useAuth0()

  const handleAcceptJob = () => {
    dispatch(acceptJob(id, user.sub))
    navigate('/myJobs')
  }

  useEffect(() => {
    dispatch(fetchJobByID(id))
  }, [])
  console.log(job)

  if (!isAuthenticated) return <p>Please login to see this job.</p>
  if (loading) return <p>Loading...</p>
  return (
    <Box
      borderWidth='1px'
      p={2}
      shadow='md'
      overflow='hidden' 
      w='100%'
      borderRadius='lg'
    >
      <Heading
        as='h2'
        m={4}
      >
        {job.title}
      </Heading>
      <Box textAlign='left' m={2}>
        <Heading
          as='h3'
          fontSize="lg"
          fontWeight='bold'>
          Description:
        </Heading>
        <Text>{job.description}</Text>
      </Box>

      <Box textAlign='left' m={2}>
        <Heading
          as='h3'
          fontSize="lg"
          fontWeight='bold'>
          Region:
        </Heading>
        <Text>{job.region}</Text>
      </Box>

      <Box textAlign='left' m={2}>
        <Heading
          as='h3'
          fontSize="lg"
          fontWeight='bold'>
          Pay:
        </Heading>
        <Text>{job.pay}</Text>
      </Box>

      <Box textAlign='left' m={2}>
        <Heading
          as='h3'
          fontSize="lg"
          fontWeight='bold'>
          Requirements:
        </Heading>
        <Text>{job.requirements}</Text>
      </Box>


      <Button m={2} onClick={handleAcceptJob}>Accept Job</Button>
    </Box>
  )
}
