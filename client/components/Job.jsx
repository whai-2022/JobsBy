import React from 'react'

import {Box, Heading, Text} from '@chakra-ui/react'

function Job(){

  return (
    <>
      
    {/* A box(card) for an individual job */}
    <Box
      p={5}
      shadow='md'
      borderWidth='1px'
      w='100%'
      borderRadius='lg'
    >
      <Heading fontSize='xl'>Job Title</Heading>
      <Text mt={4}>Job Description</Text>
    </Box>
    </>
  )
}

export default Job