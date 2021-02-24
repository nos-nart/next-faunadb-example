import React from 'react'
import { Box, VStack } from '@chakra-ui/react';

export const TodoList = ({todos}) => {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={2}
      align="stretch"
    >
      {}
      {JSON.stringify(todos, null, 2)}
    </VStack>
  )
}
