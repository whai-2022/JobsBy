import React from 'react'
import { Link as LinkTo } from 'react-router-dom'
import { MdVolunteerActivism } from 'react-icons/md'
import { GiReceiveMoney } from 'react-icons/gi'

import {
  Box,
  Badge,
  LinkBox,
  Icon,
  Text,
  Spacer,
  Circle,
  useColorModeValue,
} from '@chakra-ui/react'
import { SkipNavContent } from '@chakra-ui/skip-nav'

function Job({ title, description, pay, region, id, type }) {
  return (
    <>
      <LinkBox
        as={LinkTo}
        to={`/alljobs/${id}`}
        p={3}
        shadow="md"
        overflow="hidden"
        borderWidth="1px"
        w="100%"
        borderRadius="lg"
        bg={useColorModeValue('gray.50', 'gray.600')}
      >
        <SkipNavContent>
          <Box p={2} display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              Available
            </Badge>
            <Box
              color={useColorModeValue('gray.500', 'blue.300')}
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {region}
            </Box>
            <Spacer />
            {type == 'paid' ? (
              <Box fontSize="s" alignContent="right">
                <Circle
                  size="40px"
                  bg={useColorModeValue('blue.600', 'cyan.700')}
                  color={useColorModeValue('white', 'blue.100')}
                >
                  <Icon as={GiReceiveMoney} boxSize={5} />
                </Circle>
              </Box>
            ) : (
              <Box fontSize="s" alignContent="right">
                <Circle
                  size="40px"
                  bg={useColorModeValue('teal.600', 'purple.500')}
                  color={useColorModeValue('white', 'purple.100')}
                >
                  <Icon as={MdVolunteerActivism} boxSize={5} />
                </Circle>
              </Box>
            )}
          </Box>
          <Box mt={1} fontWeight="bold" fontSize="xl">
            {title}
          </Box>
          <Box m={2} isTruncated>
            {description}
          </Box>
          {type == 'paid' ? (
            <Box fontSize="sm">${pay}/hr</Box>
          ) : (
            <Text fontSize="sm">Voluntary Role</Text>
          )}
        </SkipNavContent>
      </LinkBox>
    </>
  )
}

export default Job
