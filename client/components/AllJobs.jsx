import React from "react"

import Job from './Job'

import { Select, Heading, VStack} from "@chakra-ui/react"

function AllJobs() {

  return (
    <>
      <Heading m={8}>Find a job in your region.</Heading>
      <Select placeholder='Select your location' size='sm' p={8}>
        <option value='Auckland'>Auckland</option>
        <option value='Wellington'>Wellington</option>
        <option value='Dargaville'>...Dargaville</option>
      </Select>

      <VStack>
      <Job/>
      <Job />
      <Job/>
      </VStack>
      
    </>
  )
}

export default AllJobs