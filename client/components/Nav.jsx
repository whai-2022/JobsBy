import React from 'react'

//link is never used - your linter should tell you this
import { Link } from 'react-router-dom'
//remove commented out code
// import { useAuth0 } from '@auth0/auth0-react'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

function Nav() {
  return (
    <>
      <Menu>
        <MenuButton as={IconButton} icon={<HamburgerIcon />}>
          Test
        </MenuButton>
      </Menu>
    </>
  )
}

export default Nav
