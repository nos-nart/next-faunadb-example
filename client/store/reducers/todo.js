import { HYDRATE } from 'next-redux-wrapper';
import * as t from '../types';

const initialState = {
  todoList: [],
  message: '',
  fetching: false,
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case t.FETCH_TODO_REQUESTED: {
      return {
        ...state,
        fetching: true,
      }
    }
    case t.FETCH_TODO_SUCCEEDED: {
      return {
        ...state,
        todoList: action.payload.data,
        fetching: false,
        message: 'Fetch successfully!'
      }
    }
    case t.FETCH_TODO_FAILED: {
      return {
        ...state,
        fetching: false,
        message: 'Something went wrong!'
      }
    }
    default: {
      return state;
    }
  }
}

export default todoReducer;
