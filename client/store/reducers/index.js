import { combineReducers } from 'redux';
import todoReducer from './todo';

const rootReducer = combineReducers({
  todo: todoReducer
});

export default rootReducer;