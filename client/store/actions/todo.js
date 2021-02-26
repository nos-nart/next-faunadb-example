import * as t from '../types';

export const fetchTodo = () => {
  return {
    type: t.FETCH_TODO_REQUESTED
  }
}

export const addTodo = (newTodo) => {
  return {
    type: t.ADD_TODO_REQUESTED,
    payload: newTodo
  }
}

export const editTodo = (editData, ref) => {
  return {
    type: t.EDIT_TODO_REQUESTED,
    payload: { editData, ref }
  }
}
