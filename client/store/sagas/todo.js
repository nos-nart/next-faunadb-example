import { all, put, takeLatest } from "redux-saga/effects";
import * as t from "../types";

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
  yield takeLatest(t.FETCH_TODO_REQUESTED, fetchTodo)
}

export default function* rootSaga() {
  yield all([
    watchFetchTodo(),
  ])
}
