import React from 'react'
import { Box } from '@chakra-ui/react';

export const TodoList = ({todos}) => {
  return (
    <Box my={6}>
      {JSON.stringify(todos, null, 2)}
    </Box>
  )
}
