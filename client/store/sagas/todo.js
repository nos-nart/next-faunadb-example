import { all, put, takeLatest, takeEvery } from "redux-saga/effects";
import * as t from "../types";
import { createStandaloneToast } from "@chakra-ui/react";

const toast = createStandaloneToast();

function* fetchTodo() {
  try {
    const response = yield fetch('http://localhost:4000/todos');
    const todoList = yield response.json();

    yield put({
      type: t.FETCH_TODO_SUCCEEDED,
      payload: todoList
    })
  } catch (error) {
    yield put({
      type: t.FETCH_TODO_FAILED,
      payload: error.message
    })
  }
}

function* watchFetchTodo() {
  yield takeEvery(t.FETCH_TODO_REQUESTED, fetchTodo)
}

function* addTodo(action) {
  try {
    const response = yield fetch('http://localhost:4000/todos/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: action.payload })
    });
    const newTodo = yield response.json();
    yield put({
      type: t.ADD_TODO_SUCCEEDED,
      payload: newTodo
    });
    toast({
      title: 'Success!',
      description: newTodo.message,
      status: 'success',
      duration: 5000,
      isClosable: true
    });
  } catch (error) {
    yield put({
      type: t.ADD_TODO_FAILED,
      payload: error.message
    })
  }
}

function* watchAddTodo() {
  yield takeLatest(t.ADD_TODO_REQUESTED, addTodo);
}

function* editTodo(action) {
  try {
    const response = yield fetch(`http://localhost:4000/todos/edit/${action.payload.ref}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ updateTodo: action.payload.editData })
    });
    const editedTodo = yield response.json();
    yield put({
      type: t.EDIT_TODO_SUCCEEDED,
      payload: editedTodo
    });
  } catch (error) {
    yield put({
      type: t.EDIT_TODO_FAILED,
      payload: error.message
    })
  }
}

function* watchEditTodo() {
  yield takeLatest(t.EDIT_TODO_REQUESTED, editTodo);
}

export default function* rootSaga() {
  yield all([
    watchFetchTodo(),
    watchAddTodo(),
    watchEditTodo(),
  ])
}
