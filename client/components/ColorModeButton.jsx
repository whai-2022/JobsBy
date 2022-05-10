import React from 'react'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

function ColorModeButton() {
  // deconstruct useColorMode()
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    // button that togglesColorMode
    <IconButton
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      colorScheme={useColorModeValue('purple', 'blue')}
      onClick={toggleColorMode}
      aria-label="light / dark mode"
    >
      {/* if current colorMode says light, make it dark, otherwise make it light */}
      Make it {colorMode === 'light' ? 'Dark' : 'light'}
    </IconButton>
  )
}

export default ColorModeButton
