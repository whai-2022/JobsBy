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
  VStack,
} from '@chakra-ui/react'

import ColorModeButton from './ColorModeButton'

import { HamburgerIcon } from '@chakra-ui/icons'

function Nav() {
  return (
    <>
      <Flex aria-hidden="true">
        <VStack>
          <nav alignSelf="flex-start">
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="navigation menu"
              />
              <MenuList>
                <Link to="/home">
                  <MenuItemOption>Home</MenuItemOption>
                </Link>
                <Link to="/alljobs">
                  <MenuItemOption>Find Job</MenuItemOption>
                </Link>
                <Link to="/postjob">
                  <MenuItemOption>Post Job</MenuItemOption>
                </Link>
                <Link to="/myJobs">
                  <MenuItemOption>My Jobs</MenuItemOption>
                </Link>
              </MenuList>
            </Menu>
          </nav>
          <ColorModeButton alignSelf="flex-end" />
        </VStack>
      </Flex>
    </>
  )
}

export default Nav
