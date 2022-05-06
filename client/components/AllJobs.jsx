import React from "react"

import { Select } from "@chakra-ui/react"

function AllJobs() {

  return (
    <>
      <Select placeholder='Select your location' size='sm'>
        <option value='Auckland'>Auckland</option>
        <option value='Wellington'>Wellington</option>
        <option value='Dargaville'>...Dargaville</option>
      </Select>




    </>
  )
}

export default AllJobs