import React, { useEffect, useState } from "react"
import * as api from '../apis'
import Job from './Job'
import JobsMap from './JobsMap'
import { fetchJobs } from "../actions"

import { Text, Button, Heading, VStack, FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"
import { useSelector, useDispatch} from "react-redux"

function AllJobs() {
  const [address, setAddress] = useState('')
  const [addresses, setAddresses] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [position, setPosition] = useState([-36.856912, 174.763399])
  const [error, setError] = useState(null)
  // console.log(addresses[0]) // after a valid address is selected, the first address object is the final address object we need

  // temporary status state for re-rendering on button press
  // const [status, setStatus] = useState(false)

  const {jobs} = useSelector((state) => state.jobsReducer)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchJobs())
  // }, [])

  // console.log(addresses[0]) // after a valid address is selected, the first address object is the final address object we need

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
    // console.log('search term is', searchTerm)
    search()
  }, [searchTerm])

  const submitSearch = () => {
    if (addresses.length) {
      setPosition([addresses[0].lat, addresses[0].lon])
      dispatch(fetchJobs(addresses[0].region)) // fetch jobs by region
    }
  }

  // function handleClick() {
  //   setStatus(true)
  // }

  return (
    <>
      {/* <button onClick={() => scrollTo(2)}>Click!</button> */}
      <Heading m={8}>Find a job in your area.</Heading>
      <JobsMap position={position} jobs={jobs}/>

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
        <Button type="submit" onClick={submitSearch}>
          Search
        </Button>
        {error && (
          <Text as="p" color="red.300">
            {error}
          </Text>
        )}
        {/* <Button onClick={handleClick}>Show all jobs</Button> */}
      </FormControl>

      {/* Cards of jobs available*/}
      <VStack spacing={6}>
        {jobs.map((job, i) => {
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
