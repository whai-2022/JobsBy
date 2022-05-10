import React from 'react'
import { Link as LinkTo } from 'react-router-dom'
import { MdAttachMoney } from 'react-icons/md'
import { FaHandshake } from 'react-icons/fa' 

import { Box, Badge, LinkBox, Icon, HStack, Text} from '@chakra-ui/react'
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
        w="full"
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
          {type == 'paid' ?
            <Box
              alignItems="center"
              fontSize="s"
            >
              <Icon
                as={MdAttachMoney}
                color='teal'
              />
              {pay}
            </Box>
          : <Box
              alignItems="center"
              fontSize="s"

            >
              <Icon
                as={FaHandshake}
                color='teal'
              /> Voluntary
            </Box>}
        
        </SkipNavContent>
        </LinkBox>
    </>
  )
}

export default Job
