import React, { useEffect } from "react"
import { fetchAcceptedJobs } from "../actions"
import {Link as LinkTo} from 'react-router-dom'

import { Heading, VStack, LinkBox, Box, Badge } from "@chakra-ui/react" // TODO: Text, Button add later - to go to full job desc.
import { useSelector, useDispatch} from "react-redux"

function AcceptedJobs() {

  const acceptedJobs = useSelector((state) => state.acceptedJobs)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAcceptedJobs('Auth0||Something')) // TODO: use userId later
  }, [])


  return (
    <>
      <Heading m={9} fontSize='lg'>Here are the jobs you have accepted:</Heading>

      <VStack spacing={6}>

            {acceptedJobs?.jobs.map((jobPosting, i) => {
              return (
                <LinkBox as={LinkTo} to={`/alljobs/${jobPosting.id}`}
                  p={3}
                  shadow='md'
                  overflow='hidden'
                  borderWidth='1px'
                  w='100%'
                  borderRadius='lg'
                  key={`${jobPosting.id} ${i}`}>
                    <Box
                    p={2}
                    display='flex'
                    alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                      Awaiting Response
                    </Badge>
                    <Box
                      color='gray.500'
                      fontWeight='semibold'
                      letterSpacing='wide'
                      fontSize='xs'
                      textTransform='uppercase'
                      ml='2'
                    >
                    {jobPosting.region}
                    </Box>
                    </Box>
                    <Box
                      mt={1}
                      fontWeight='bold'
                      fontSize='xl'
                    >
                      {jobPosting.title}
                    </Box>
                      <Box m={2}>
                        {jobPosting.pay}
                      </Box>
                      <Box m={2}>
                        {jobPosting.date}
                      </Box>
                  {/* <button className='button' onClick={handleClick}>Delete</button> */}
                </LinkBox>
              )
            })}
      </VStack>
    </>
  )
}

export default AcceptedJobs
