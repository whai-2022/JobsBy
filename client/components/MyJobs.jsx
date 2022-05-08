import React, { useEffect } from "react"
import { fetchJobs } from "../actions"

import { Heading, VStack } from "@chakra-ui/react" // TODO: Text, Button add later - to go to full job desc.
import { useSelector, useDispatch} from "react-redux"

function MyJobs() {
  // const [error, setError] = useState(null)

  const jobs = useSelector((state) => state.jobs)
  console.log(jobs)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchJobs())
  }, [])


  return (
    <>
      <Heading m={9}>Here are your jobs:</Heading>

      <VStack spacing={6}>
      <div>
          <ul>
            {jobs?.map((jobPosting, i) => {
              return (
                <li key={`${jobPosting.id} ${i}`}>
                  <h2>{jobPosting.title}</h2>
                  <img src={jobPosting.name} />
                  <p>{jobPosting.region}</p>
                  {/* <button className='button' onClick={handleClick}>Delete</button> */}
                </li>
              )
            })}
          </ul>
        </div>
      </VStack>
    </>
  )
}

export default MyJobs



// {jobs.map((job) => {
//   return <>
//     <Job
//       key={i}
//       title={job.title}
//       description={job.description}
//       pay={job.pay}
//       region={job.locationRegion}
//       suburb={job.locationSuburb} />
//     </>
//   })}
