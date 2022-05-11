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
  Image,
  Box,
  useBreakpointValue
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

function Nav() {
  const spacer = useBreakpointValue({ base: null, md: <Box boxSize="72px" />})

  return (
    <>
    <Flex 
      align='center'
      justify='space-between'
      wrap='wrap'
      padding={2}
      // bg='gray.50'
      >
    <Box padding={4}>
        <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuItemOption><Link to="/home">Home</Link></MenuItemOption>
          <MenuItemOption><Link to="/alljobs">Find Job</Link></MenuItemOption>
          <MenuItemOption><Link to="/postjob">Post Job</Link></MenuItemOption>
          <MenuItemOption><Link to="/myJobs">My Jobs</Link></MenuItemOption>
        </MenuList>
      </Menu>
      </Box>
      <span>
        <Box boxSize={{ base: '160px', md: '200px' }} padding={2}>
        <Image src= 'images/logoFULL.png'></Image>
        </Box>
        </span>
        {spacer}
      
    </Flex>
    </>
  )
}

export default Nav
