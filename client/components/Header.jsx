import { Image, Box, Flex } from '@chakra-ui/react'
import React from 'react'

function Header() {
  return (
    <Flex align='right' justify='right'>
    <Box boxSize='160px'>
      <Image src= 'images/logoFULL.png'></Image>
    </Box>
    </Flex>
  )
}

export default Header
