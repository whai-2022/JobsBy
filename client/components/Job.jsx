import React from 'react'
import { Link as LinkTo } from 'react-router-dom'

import { Box, Badge, LinkBox } from '@chakra-ui/react'
import { SkipNavContent } from '@chakra-ui/skip-nav'

function Job({ title, description, pay, region, id, type }) {
  return (
    <>
      <LinkBox
        as={LinkTo}
        to={`/alljobs/${id}`}
        p={2}
        shadow="md"
        overflow="hidden"
        borderWidth="1px"
        w="100%"
        borderRadius="lg"
        bg="gray.50"
      >
        <SkipNavContent>
          <Box p={2} display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="purple">
              Available
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {region}
            </Box>
          </Box>
          <Box mt={1} fontWeight="bold" fontSize="xl">
            {title}
          </Box>
          <Box m={2} isTruncated>
            {description}
          </Box>
          <Box m={2}>{pay}</Box>
          <Box>{type}</Box>
        
        </SkipNavContent>
        </LinkBox>
    </>
  )
}

export default Job
