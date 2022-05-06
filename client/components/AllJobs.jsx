import React, { useState, useEffect, useRef } from 'react'
import * as api from '../apis'
import Job from './Job'

import {
  Text,
  Select,
  UnorderedList,
  ListItem,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react'
import JobsMap from './JobsMap'

function AllJobs() {
  const [address, setAddress] = useState('')
  const [addresses, setAddresses] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [position, setPosition] = useState([-36.856912, 174.763399])
  const [error, setError] = useState(null)
  console.log(addresses[0]) // after a valid address is selected, the first address object is the final address object we need

  const ulRef = useRef(null)

  const handleAddressChange = (e) => {
    setAddress(e.target.value)
  }
  
  // debounce / throttle
  // auc
  useEffect(() => {
    const interval = setInterval(() => {
      setSearchTerm(address)
    }, 500)

    return () => clearInterval(interval)
  }, [address])

  // effect is mounted
  // effect is ran

  // effect is unmounted

  const search = () => {
    
    api
      .getAutocompleteAddresses(searchTerm)
      .then((res) => {
        console.log(res)
        setAddresses(res)
        setPosition([res[0].lat, res[0].lon])
      })
      .catch((err) => {
        console.log(err)
        setAddresses([])
        setError(err.message)
      })
  }

  useEffect(() => {
    if (!searchTerm) return
    console.log('search term is', searchTerm)
    // search()
  }, [searchTerm])

  const toggle = () => {
    setPosition([-37.7678863, 175.2898972])
  }

  const scrollTo = (index) => {
    console.log(ulRef.current)
    ulRef.current.children[index].scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* <button onClick={() => scrollTo(2)}>Click!</button> */}
      <Heading m={8}>Find a job in your area.</Heading>
      <JobsMap position={position} />
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
        <Button type="submit" onClick={search}>
          Search
        </Button>
        {error && (
          <Text as="p" color="red.300">
            {error}
          </Text>
        )}
      </FormControl>
      <Button onClick={toggle}>Move Pointer</Button>
      {/* Cards of jobs */}
      <VStack as="ul" spacing={6} ref={ulRef}>
        <Job />
        <Job />
        <Job />
      </VStack>
    </>
  )
}

export default AllJobs
