import React from 'react'

import {Box, Heading, Text} from '@chakra-ui/react'

function Job(){

  return (
    <>
    <Box p={5} shadow='md' borderWidth='1px'>
      <Heading fontSize='xl'>Job Title</Heading>
      <Text mt={4}>Job Description</Text>
    </Box>
    </>
  )
}

export default Job