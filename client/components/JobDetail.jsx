import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { useAuth0 } from '@auth0/auth0-react'

import { useParams } from 'react-router-dom'
import { fetchJobByID, acceptJob } from '../actions'

import { Heading, Box, Text, Button} from '@chakra-ui/react'

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
        m={4}
      >
        {job.title}
      </Heading>
      <Box textAlign='left' m={2}>
        <Text
          fontWeight='bold'>
          Description:
        </Text>
        {job.description}
      </Box>

      <Box textAlign='left' m={2}>
        <Text
          fontWeight='bold'>
          Region:
        </Text>
        {job.region}
      </Box>

      <Box textAlign='left' m={2}>
        <Text
          fontWeight='bold'>
          Pay:
        </Text>
        {job.pay}
      </Box>

      <Box textAlign='left' m={2}>
        <Text
          fontWeight='bold'>
          Requirements:
        </Text>
        {job.requirements}
      </Box>

      <Box textAlign='left' m={2}>
        <Text
          fontWeight='bold'>
          Contact:
        </Text>
        {job.email}
      </Box>
      
      

      <Button m={2} onClick={handleAcceptJob}>Accept Job</Button>
    </Box>
  )
}
