import React from 'react'

import { Link } from 'react-router-dom'
// import { useAuth0 } from '@auth0/auth0-react'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  IconButton,
  Flex,
  HStack,
  Image,
  Box,
  useColorModeValue,
} from '@chakra-ui/react'

import ColorModeButton from './ColorModeButton'

import { HamburgerIcon } from '@chakra-ui/icons'

function Nav() {
  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={2}
        // bg='gray.50'
      >
        <HStack justify-content="space-around">
          <nav>
            <Box padding={4}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  colorScheme={useColorModeValue('purple', 'blue')}
                  variant="outline"
                />
                <MenuList>
                  <MenuItemOption>
                    <Link to="/home">Home</Link>
                  </MenuItemOption>
                  <MenuItemOption>
                    <Link to="/alljobs">Find Job</Link>
                  </MenuItemOption>
                  <MenuItemOption>
                    <Link to="/postjob">Post Job</Link>
                  </MenuItemOption>
                  <MenuItemOption>
                    <Link to="/myJobs">My Jobs</Link>
                  </MenuItemOption>
                </MenuList>
              </Menu>
            </Box>
          </nav>
          <ColorModeButton alignSelf="flex-end" />
        </HStack>
        <span>
          <Box boxSize="160px" padding={2}>
            <Image
              src="images/logoFULL.png"
              alt="JobsyBy, Community for Community - Logo"
            ></Image>
          </Box>
        </span>
      </Flex>
    </>
  )
}

export default Nav
