import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import { useParams } from 'react-router-dom'
import { fetchJobByID, acceptJob } from '../actions'

import { Heading, Button } from '@chakra-ui/react'

export default function JobDetail() {
  const { id } = useParams()

  const { job, loading } = useSelector((state) => state.jobsReducer)
  const dispatch = useDispatch()

  const { isAuthenticated, user } = useAuth0()

  const handleAcceptJob = () => {
    dispatch(acceptJob(id, user.sub))
    // then navigate to my jobs ?
    alert('You have successfully accepted the job.')
  }

  useEffect(() => {
    dispatch(fetchJobByID(id))
  }, [])

  if (!isAuthenticated) return <p>Please login to see this job.</p>
  if (loading) return <p>Loading...</p>
  return (
    <>
      <Heading>{job.title}</Heading>
      <Button onClick={handleAcceptJob}>Accept Job</Button>
    </>
  )
}
