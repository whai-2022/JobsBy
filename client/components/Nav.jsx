import React from 'react'

import { Link } from 'react-router-dom'

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

function Nav(){

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