import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Text, Flex, Button, Input } from '@chakra-ui/react';

import { addTodo } from '@/store/index';

export const TodoHeader = () => {
  const inputRef = React.useRef(null);
  const state = useSelector((state) => state.todo);
	const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputRef.current.value));
  }

  return (
    <>
      <Text fontSize="2xl" align="center" my={4} fontWeight="bold">next-redux-wrapper + fauna</Text>
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
