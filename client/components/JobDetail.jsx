import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useParams } from 'react-router-dom'
import { fetchJobByID } from '../actions'

import { Heading, Box, Text} from '@chakra-ui/react'

export default function JobDetail() {
  const { id } = useParams()

  const { job, loading } = useSelector((state) => state.jobsReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchJobByID(id))
  }, [])
  console.log(job)

  if (loading) return <p>Loading...</p>
  return (
    <>
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

      

      
    </Box>
  </>

  )
}
