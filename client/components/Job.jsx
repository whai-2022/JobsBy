import React from 'react'
import { Link as LinkTo } from 'react-router-dom'

import {Box, Badge, LinkBox } from '@chakra-ui/react'

function Job({ title, description, pay, region, suburb, id} ) {

  return (
    <>
    {/* A box(card) for an individual job */}
    {/* LinkBox sets up the entire card to be a clickable link to the details of the individual job */}
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