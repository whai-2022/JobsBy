import React, { useState } from 'react'
import * as api from '../apis'
import Job from './Job'

import {
  Select,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react'
import JobsMap from './JobsMap'

function AllJobs() {
  const [address, setAddress] = useState('')
  const [addresses, setAddresses] = useState([])
  const [position, setPosition] = useState([-36.856912, 174.763399])
  console.log(addresses[0]) // after a valid address is selected, the first address object is the final address object we need

  const handleAddressChange = (e) => {
    setAddress(e.target.value)
    api
      .getAutocompleteAddresses(e.target.value)
      .then((res) => {
        setAddresses(res)
      })
      .catch((err) => console.log(err))
  }

  const search = () => {
    setPosition([addresses[0].lat, addresses[0].lon])
  }

  return (
    <>
      <Heading m={8}>Find a job in your area.</Heading>
      <JobsMap position={position}/>
      <FormControl m={6}>
        <FormLabel htmlFor="address">Address</FormLabel>
        <Input
          list="addresses"
          id="address"
          name="address"
          type="address"
          value={address}
          onChange={handleAddressChange}
        />
        <datalist id="addresses" name="addresses">
          {addresses.map((address, idx) => (
            <option value={address.formatted} key={`address-${idx}`} />
          ))}
        </datalist>
        <Button onClick={search}>Search</Button>
      </FormControl>
      {/* Cards of jobs */}
      <VStack spacing={6}>
        <Job />
        <Job />
        <Job />
      </VStack>
    </>
  )
}

export default AllJobs
