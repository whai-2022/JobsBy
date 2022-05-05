import React from 'react'

import { VStack, Heading, Text} from '@chakra-ui/react'

function PostJob(){

  return (
    <>
      <VStack
        w='full'
        h='full'
        p={10}
        spacing={10}
        align-items='flex-start'>
        <Heading size='xl' textAlign='center'> Post a job </Heading>
        <Text>Please enter the details for your job:</Text>
      </VStack>
    </>
  )
}

export default PostJob