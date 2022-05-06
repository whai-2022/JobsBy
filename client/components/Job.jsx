import React from 'react'

import {Box, Heading, Text, Badge } from '@chakra-ui/react'

function Job({ title, description, pay, region, suburb} ) {

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
      <Box p={6} display='flex'
      alignItems='baseline'>
        <Badge borderRadius='full' px='2' colorScheme='teal'>
          Available
        </Badge>
        <Box
          color='gray.300'
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='xs'
          textTransform='uppercase'
          ml='2'
        >
        {suburb}, {region}
        </Box>
      </Box>
      
        <Box
          mt={1}
          fontWeight='bold'
          fontSize='xl'
        >
          {title}
        </Box>
        <Box m={4} isTruncated>{description}</Box>
        <Box m={2}>
          {pay}
        </Box>
      </Box>
        
    </>
  )
}

export default Job