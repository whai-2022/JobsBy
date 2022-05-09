import React, { useEffect, useState } from 'react'
import * as api from '../apis'
import Job from './Job'
import JobsMap from './JobsMap'
import { fetchJobsByRegion } from '../actions'
import { SkipNavContent } from '@chakra-ui/skip-nav'

import {
  Text,
  Button,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Container,
} from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'

function AllJobs() {
  const [address, setAddress] = useState('')
  const [addresses, setAddresses] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [position, setPosition] = useState([-36.856912, 174.763399])
  const [error, setError] = useState(null)
  // after a valid address is selected, the first address object is the final address object we need

  const { jobs } = useSelector((state) => state.jobsReducer)
  const dispatch = useDispatch()
  // after a valid address is selected, the first address object is the final address object we need

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

  const search = () => {
    api
      .getAutocompleteAddresses(searchTerm)
      .then((res) => {
        setAddresses(res)
      })
      .catch((err) => {
        console.log(err)
        setAddresses([])
        setError(err.message)
      })
  }

  useEffect(() => {
    if (!searchTerm) return
    search()
  }, [searchTerm])

  const submitSearch = () => {
    if (addresses.length) {
      setPosition([addresses[0].lat, addresses[0].lon])
      dispatch(fetchJobsByRegion(addresses[0].region))
    }
  }

  return (
    <>
      <SkipNavContent>
        <Heading m={8}>Find a job in your area.</Heading>
        <Container centerContent>
          <JobsMap position={position} jobs={jobs} />
        </Container>

        {/* Input field for address to be searched */}
        <FormControl w="90%" m={6} isRequired={true}>
          <FormLabel htmlFor="address">Address:</FormLabel>
          <Input
            list="addresses"
            id="address"
            name="address"
            type="address"
            value={address}
            onChange={handleAddressChange}
          />
          <FormHelperText textAlign="left" mb={6}>
            We&apos;ll never share your address.
          </FormHelperText>

          <datalist id="addresses" name="addresses">
            {addresses.map((address, idx) => (
              <option value={address.formatted} key={`address-${idx}`} />
            ))}
          </datalist>
          <Button type="submit" onClick={submitSearch}>
            Search
          </Button>
          {error && (
            <Text as="p" color="red.300">
              {error}
            </Text>
          )}
        </FormControl>

        {/* Cards of jobs available*/}
        <VStack spacing={6}>
          {jobs.map((job, i) => {
            return (
              <Job
                key={i}
                id={job.id}
                title={job.title}
                description={job.description}
                pay={job.pay}
                region={job.region}
              />
            )
          })}
        </VStack>
      </SkipNavContent>
    </>
  )
}

export default AllJobs
