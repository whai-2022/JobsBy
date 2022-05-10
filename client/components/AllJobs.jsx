import React, { useEffect, useState } from 'react'
import * as api from '../apis'
import Job from './Job'
import JobsMap from './JobsMap'
import { fetchJobsByRegion } from '../actions'

import { SkipNavContent } from '@chakra-ui/skip-nav'
import { useAuth0 } from '@auth0/auth0-react'
import LoggedIn from './LoggedIn'

import { FaSearchLocation } from 'react-icons/fa'

import { MdLocationPin } from 'react-icons/md'

import {
  Text,
  Icon,
  Button,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Container,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react'

import { useSelector, useDispatch } from 'react-redux'

function AllJobs() {
  const [address, setAddress] = useState('')
  const [addresses, setAddresses] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [position, setPosition] = useState([-36.856912, 174.763399])
  const [error, setError] = useState(null)

  const { isAuthenticated } = useAuth0()
  // after a valid address is selected, the first address object is the final address object we need

  const { jobs } = useSelector((state) => state.jobs)
  const dispatch = useDispatch()
  // after a valid address is selected, the first address object is the final address object we need

  const handleAddressChange = (e) => {
    setAddress(e.target.value)
  }
  console.log(jobs)

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

  if (!isAuthenticated)
    return (
      <p>
        Please login to find a job. <LoggedIn />
      </p>
    )
  return (
    <>
      {/* <SkipNavContent> */}
      <VStack w="full" h="full" p={4} spacing={6}>
        <Heading as="h1" size="xl" alignSelf="center">
          Find a job in your area
        </Heading>
        <Container position="relative" centerContent>
          <JobsMap position={position} jobs={jobs} padding="10px" />
        </Container>

        {/* Input field for address to be searched */}
        <FormControl m={6} isRequired={true}>
          <FormLabel htmlFor="address">Address:</FormLabel>
          <InputGroup>
            <InputLeftElement>
              <Icon as={MdLocationPin} w={6} h={6} />
            </InputLeftElement>
            <Input
              list="addresses"
              id="address"
              name="address"
              type="address"
              value={address}
              onChange={handleAddressChange}
              focusBorderColor={useColorModeValue('purple.700', 'purple.300')}
              bg={useColorModeValue('cyan.100', 'gray.600')}
              variant="flushed"
            />
          </InputGroup>
          <FormHelperText textAlign="left" mb={6}>
            We&apos;ll never share your address
          </FormHelperText>

          <datalist id="addresses" name="addresses">
            {addresses.map((address, idx) => (
              <option value={address.formatted} key={`address-${idx}`} />
            ))}
          </datalist>
          <Button
            type="submit"
            onClick={submitSearch}
            rightIcon={<FaSearchLocation />}
            colorScheme={useColorModeValue('purple', 'blue')}
            size="lg"
          >
            Search
          </Button>
          {error && (
            <Text as="p" color="red.300">
              {error}
            </Text>
          )}
        </FormControl>
        <VStack spacing={6} m={2}>
          {jobs.map((job, i) => {
            return (
              <Job
                key={i}
                id={job.id}
                title={job.title}
                description={job.description}
                pay={job.pay}
                region={job.region}
                type={job.type}
              />
            )
          })}
        </VStack>
      </VStack>
      {/* Cards of jobs available*/}

      {/* </SkipNavContent> */}
    </>
  )
}

export default AllJobs
