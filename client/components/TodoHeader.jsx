import React from 'react';
import { Text, Flex, Button, Input } from '@chakra-ui/react';

export const TodoHeader = () => {
  const inputRef = React.useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('input value ~> ', inputRef.current.value);
  }

  return (
    <>
      <Text fontSize="2xl" align="center" my={4} fontWeight="bold">next + redux-wrapper + fauna</Text>
      <Flex as="form" alignItems="center" onSubmit={onSubmit}>
        <Input
          ref={inputRef}
          type="text"
          id="todo"
          placeholder="what need to be done?"
          size="sm"
        />
        <Button type="submit" colorScheme="teal" size="sm" ml={2}>
          +
        </Button>
      </Flex>
    </>
  )
}
