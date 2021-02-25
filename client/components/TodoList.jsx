import React from 'react'
import { Box, Text, Flex, VStack, StackDivider, Checkbox, Button } from '@chakra-ui/react';

import { EmptyIllustration } from './svgs/EmptyIllustration';
import { TrashIcon } from './svgs/TrashIcon';
import { EditTodo } from './EditTodo';

export const TodoList = ({todos}) => {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      my={6}
      align="stretch"
    >
      {
        todos.length ? todos.map(todo => (
          <Flex key={todo.id} alignItems="center" justifyContent="space-between">
            <Text fontSize="sm" as={todo.status ? 's' : ''}>{todo.title}</Text>
            <Box d="flex" alignItems="center">
              <Checkbox mr={3} colorScheme="green" isChecked={todo.status}/>
              <Button size="sm" colorScheme="pink" variant="ghost"><TrashIcon width={15} /></Button>
              <EditTodo prevTitle={todo.title} />
            </Box>
          </Flex>
        )) : (
          <Flex direction="column" my={6} alignItems="center">
            <EmptyIllustration width={300} />
            <Text my={6}>There are no items to display</Text>
          </Flex>
        )
      }
    </VStack>
  )
}
