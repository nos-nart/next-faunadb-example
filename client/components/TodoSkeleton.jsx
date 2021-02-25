import React from 'react'
import { Box, Skeleton } from '@chakra-ui/react';
import { Table, Tr, Th, Td } from './Table';

const SkeletonRow = ({ width }) => (
  <Box as="tr">
    <Td>
      <Skeleton height="10px" w={width + 20} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width - 10} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width + 10} my={4} />
    </Td>
  </Box>
);

export const TodoSkeleton = () => {
  return (
    <Table my={6} w="100%">
      <tbody>
        <SkeletonRow width="160px" />
        <SkeletonRow width="40px" />
        <SkeletonRow width="50px" />
        <SkeletonRow width="20px" />
      </tbody>
    </Table>
  );
}
