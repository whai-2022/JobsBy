import React from "react"

import { Select, Heading, VStack} from "@chakra-ui/react"

function AllJobs() {

  return (
    <>
      <Heading m={8}>Find a job in your region.</Heading>
      <Select placeholder='Select your location' size='sm'>
        <option value='Auckland'>Auckland</option>
        <option value='Wellington'>Wellington</option>
        <option value='Dargaville'>...Dargaville</option>
      </Select>

      <VStack>
        
      </VStack>



    </>
  )
}

export default AllJobs