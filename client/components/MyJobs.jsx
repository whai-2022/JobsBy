import React, { useEffect } from 'react'
import { fetchUserJobs } from '../actions'
import { Link as LinkTo } from 'react-router-dom'

import { Heading, VStack, LinkBox, Box, Badge } from '@chakra-ui/react' // TODO: Text, Button add later - to go to full job desc.
import { useSelector, useDispatch } from 'react-redux'
import { SkipNavContent } from '@chakra-ui/skip-nav'

function MyJobs() {
  const myJobs = useSelector((state) => state.myJobs)
  // For Team's Learning (above does this): myJobs = {jobs = [res.body/actual jobs]}

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUserJobs('Auth0||something')) // TODO: use userId later
  }, [])

  return (
    <>
      <SkipNavContent>
        <Heading m={9} fontSize="2xl">
          My Jobs
        </Heading>
        <Heading m={9} fontSize="lg">
          Here are the jobs you have posted:
        </Heading>

<<<<<<< HEAD
        <VStack spacing={6}>
          {myJobs?.jobs.map((jobPosting, i) => {
            return (
              <LinkBox
                as={LinkTo}
                to={`/alljobs/${jobPosting.id}`}
                p={3}
                shadow="md"
                overflow="hidden"
                borderWidth="1px"
                w="100%"
                borderRadius="lg"
                key={`${jobPosting.id} ${i}`}
              >
                <Box p={2} display="flex" alignItems="baseline">
                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    Awaiting Response
                  </Badge>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  >
=======
            {myJobs?.jobs.map((jobPosting, i) => {
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
                    <Badge borderRadius='full' px='2' colorScheme='blue'>
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
>>>>>>> dev
                    {jobPosting.region}
                  </Box>
                </Box>
                <Box mt={1} fontWeight="bold" fontSize="xl">
                  {jobPosting.title}
                </Box>
                <Box m={2}>{jobPosting.pay}</Box>
                <Box m={2}>{jobPosting.date}</Box>
                {/* TODO: <button className='button' onClick={handleClick}>Delete</button> */}
              </LinkBox>
            )
          })}
        </VStack>
      </SkipNavContent>
    </>
  )
}

export default MyJobs
