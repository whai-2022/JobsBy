import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useParams } from 'react-router-dom'
import { fetchJobByID } from '../actions'

import { Heading } from '@chakra-ui/react'

export default function JobDetail() {
  const { id } = useParams()

  const { job, loading } = useSelector((state) => state.jobsReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchJobByID(id))
  }, [])

  if (loading) return <p>Loading...</p>
  return (
    <Heading>{job.title}</Heading>
  )
}
