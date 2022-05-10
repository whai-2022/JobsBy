import React from 'react'

import { Link } from 'react-router-dom'
// import { useAuth0 } from '@auth0/auth0-react'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  IconButton,
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

function Nav() {
  return (
    <>
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
    </>
  )
}

export default Nav
