import React from 'react'

import { useParams } from 'react-router-dom'
import { fetchJobByID } from '../actions'

export default function JobDetail() {
  const { id } = useParams()


  return (
    id
  )
}
