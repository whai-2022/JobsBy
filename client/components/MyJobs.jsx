import React, { useEffect } from "react"
import { fetchUserJobs } from "../actions"

import { Heading, VStack } from "@chakra-ui/react" // TODO: Text, Button add later - to go to full job desc.
import { useSelector, useDispatch} from "react-redux"

function MyJobs() {
  // const [error, setError] = useState(null)

  const myJobs = useSelector((state) => state.myJobs)
  // myJobs = {jobs = [res.body/actual jobs]}
  console.log(myJobs)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUserJobs('Auth0||something')) // TODO: use userId later
  }, [])


  return (
    <>
      <Heading m={9}>Here are your jobs:</Heading>

      <VStack spacing={6}>
      <div>
          <ul>
            {myJobs?.jobs.map((jobPosting, i) => {
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
