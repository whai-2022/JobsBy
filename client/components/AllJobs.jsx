import React, { useState } from "react"
import * as api from '../apis'
import Job from './Job'

import { Heading, VStack, FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

function AllJobs() {
  const [address, setAddress] = useState('')
  const [addresses, setAddresses] = useState([])

  console.log(addresses[0]) // after a valid address is selected, the first address object is the final address object we need

  const handleAddressChange = (e) => {
    setAddress(e.target.value)
    api.getAutocompleteAddresses(e.target.value)
      .then(res => {
        setAddresses(res)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <Heading m={8}>Find a job in your area.</Heading>

      <FormControl m={6} w='85%' isRequired={true}>
          <FormLabel w='80%' htmlFor="address">Address:</FormLabel>
          <Input
            w='100%'
            list="addresses"
            id="address"
            name="address"
            type="address"
            value={address}
            onChange={handleAddressChange}
          />
          <FormHelperText textAlign='left' mb={6}>We&apos;ll never share your address.</FormHelperText>
          <datalist id="addresses" name="addresses" >
            {addresses.map((address, idx) => (
              <option value={address.formatted} key={`address-${idx}`} />
            ))}
        </datalist>
      </FormControl>

      {/* Cards of jobs */}
      <VStack spacing={6} w='100%'>
        <Job/>
        <Job />
        <Job/>
      </VStack>
      
    </>
  )
}

export default AllJobs