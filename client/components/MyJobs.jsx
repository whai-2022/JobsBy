import React, { useEffect, useState } from "react"
import * as api from '../apis'
import Job from './Job'
import { fetchJobs } from "../actions"

import { Text, Button, Heading, VStack } from "@chakra-ui/react"
import { useSelector, useDispatch} from "react-redux"

function AllJobs() {
  const [error, setError] = useState(null)
  // console.log(addresses[0]) // after a valid address is selected, the first address object is the final address object we need

  // temporary status state for re-rendering on button press
  // const [status, setStatus] = useState(false)

  const {jobs} = useSelector((state) => state.jobsReducer)


  // useEffect(() => {
  //   dispatch(fetchJobs())
  // }, [])


  return (
    <>
      <Heading m={9}>Here are your jobs</Heading>

      <VStack spacing={6}>
        {jobs.map((job, i) => {
          return <>
            <Job
              key={i}
              title={job.title}
              description={job.description}
              pay={job.pay}
              region={job.locationRegion}
              suburb={job.locationSuburb} />
            </>
          })}
      </VStack>
    </>
  )
}

export default AllJobs
