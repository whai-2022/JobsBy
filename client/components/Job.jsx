import React from 'react'

import {Box, Heading, Text} from '@chakra-ui/react'

function Job({ title, description, pay } ) {

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
      <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>{description}</Text>
        <Text>{pay}</Text>
    </Box>
    </>
  )
}

export default Job