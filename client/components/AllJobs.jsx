import React from "react"

import { Select } from "@chakra-ui/react"
import JobsMap from "./JobsMap"

function AllJobs() {

  return (
    <div>
      <JobsMap/>
      <Select placeholder='Select your location' size='sm'>
        <option value='Auckland'>Auckland</option>
        <option value='Wellington'>Wellington</option>
        <option value='Dargaville'>...Dargaville</option>
      </Select>


    </div>
  )
}

export default AllJobs