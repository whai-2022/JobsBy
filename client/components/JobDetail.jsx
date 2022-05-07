import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useParams } from 'react-router-dom'
import { fetchJobByID } from '../actions'

import { Heading } from '@chakra-ui/react'

export default function JobDetail() {
  const { id } = useParams()

  const { job } = useSelector((state) => state.jobsReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchJobByID(id))
  }, [])

  return (
    <Heading>{job.title}</Heading>
  )
}
