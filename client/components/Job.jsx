import React from 'react'
import { Link as LinkTo } from 'react-router-dom'

import {Box, Badge, LinkBox } from '@chakra-ui/react'

function Job({ title, description, pay, region, id }) {

  return (
    <>
    <LinkBox
      as={LinkTo} to={`/alljobs/${id}`}
      p={2}
      shadow='md'
      overflow='hidden' 
      borderWidth='1px'
      w='100%'
      borderRadius='lg'
    >
      <Box
        p={2}
        display='flex'
        alignItems='baseline'
      >
        <Badge borderRadius='full' px='2' colorScheme='teal'>
          Available
        </Badge>
        <Box
          color='gray.500'
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='xs'
          textTransform='uppercase'
          ml='2'
        >
        {region}
        </Box>
      </Box>
      <Box
        mt={1}
        fontWeight='bold'
        fontSize='xl'
      >
        {title}
      </Box>
      <Box
       m={2}
        isTruncated
      >
       {description}
      </Box>
      <Box m={2}>
        {pay}
      </Box>
    </LinkBox>
        
    </>
  )
}

export default Job