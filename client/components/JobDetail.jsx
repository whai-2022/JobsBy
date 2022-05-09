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
    //if you already have all jobs in your store you could just use a find instead of hitting your api again
    // if you don't then this is fine
    dispatch(fetchJobByID(id))
  }, []) // you probably want to call this code whenever id changes

  if (loading) return <p>Loading...</p>
  return (
    <Heading>{job.title}</Heading>
  )
}
