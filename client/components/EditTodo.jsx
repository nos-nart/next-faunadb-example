import React from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  ModalFooter
} from '@chakra-ui/react';
import { EditIcon } from './svgs/EditIcon';
import { SaveIcon } from './svgs/SaveIcon';

export const EditTodo = ({ prevTitle }) => {
  const inputRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onEdit = (e) => {
    e.preventDefault();
    console.log('editing ~> ', inputRef.current.value);
  }

  return (
    <>
      <Button size="sm" colorScheme="blue" variant="ghost" onClick={onOpen}>
        <EditIcon width={15} />
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent as="form" onSubmit={onEdit}>
          <ModalHeader fontWeight="bold">Edit todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody pt={2}>
            <FormControl>
              <FormLabel>Old task</FormLabel>
              <Input
                ref={inputRef}
                name="edit todo"
                placeholder={prevTitle}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="teal"
              type="submit"
              size="sm"
            >
              <SaveIcon width={15} />
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
