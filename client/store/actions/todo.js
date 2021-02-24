import * as t from '../types';

export const fetchTodo = () => {
  return {
    type: t.FETCH_TODO_REQUESTED
  }
}
