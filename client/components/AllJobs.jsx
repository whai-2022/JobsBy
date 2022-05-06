import React, { useEffect, useState } from "react"
import * as api from '../apis'
import Job from './Job'
import { fetchJobs } from "../actions"

import { Box, Button, Heading, VStack, FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"
import { useSelector, useDispatch} from "react-redux"

function AllJobs() {
  const [address, setAddress] = useState('')
  const [addresses, setAddresses] = useState([])

  // temporary status state for re-rendering on button press
  const [status, setStatus] = useState(false)

  const jobs = useSelector((state) => state.jobsReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchJobs())
  }, [])

  // console.log(addresses[0]) // after a valid address is selected, the first address object is the final address object we need

  const handleAddressChange = (e) => {
    setAddress(e.target.value)
    api.getAutocompleteAddresses(e.target.value)
      .then(res => {
        setAddresses(res)
      })
      .catch(err => console.log(err))
  }

  function handleClick() {
    setStatus(true)
  }

  return (
    <>
      <Heading m={8}>Find a job in your area.</Heading>

      {/* Input field for address to be searched */}
      <FormControl w='90%' m={6} isRequired={true}>
        <FormLabel  htmlFor="address">Address:</FormLabel>
          <Input
            list="addresses"
            id="address"
            name="address"
            type="address"
            value={address}
            onChange={handleAddressChange}
          />
        <FormHelperText textAlign='left' mb={6}>We&apos;ll never share your address.</FormHelperText>

        <datalist id="addresses" name="addresses" >
          {addresses.map((address, idx) => (<option value={address.formatted} key={`address-${idx}`} />))}
        </datalist>
        <Button onClick={handleClick}>Search</Button>
      </FormControl>

      {/* Cards of jobs available*/}
      <VStack spacing={6}>
        {status && jobs.map((job, i) => {
          return <>
            {/* <Box m={1} fontSize='sm'>
              Select job for more details
            </Box> */}
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