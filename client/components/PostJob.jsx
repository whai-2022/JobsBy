import React, { useState } from 'react'
import * as api from '../apis'
import {
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import { useAuth0 } from '@auth0/auth0-react'

function PostJob() {
  const { user } = useAuth0()
  // userId: user.sub
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
      <VStack w="full" h="full" p={10} spacing={10} align-items="flex-start">
        <Heading size="xl" textAlign="center">
          {' '}
          Post a job{' '}
        </Heading>
        <Text>Please enter the details for your job:</Text>
        <FormControl>
          <FormLabel htmlFor="address">Address</FormLabel>
          <Input
            list="addresses"
            id="address"
            name="address"
            type="address"
            value={address}
            onChange={handleAddressChange}
          />
          <datalist id="addresses" name="addresses" >
            {addresses.map((address, idx) => (
              <option value={address.formatted} key={`address-${idx}`} />
            ))}
          </datalist>
        </FormControl>
      </VStack>
    </>
  )
}

export default PostJob
