import { takeLatest, call, put, fork, all } from 'redux-saga/effects'
import * as types from '../actions/todoActions'
import {fetchTodosApi, addTodoApi, deleteTodoApi, updateTodoApi} from '../../api/todos'

function* fetchTodos(){
  try {
    const todos = yield call(fetchTodosApi)
    yield put(types.fetchTodosSucceeded({data: todos}))
  } catch (e) {
    yield put({
      type: types.TODOS_FETCH_FAILED,
      payload: {
        message: e.message
      }
    })
  }
}

function* addTodo({payload}){
  try {
    const newTodo = yield call(addTodoApi, payload)
    yield put(types.addTodoSucceeded(newTodo))
  } catch (e) {
    yield put({
      type: types.TODO_ADD_FAILED,
      payload: { message: e.message },
    })
  }
}

function* deleteTodo({payload}){
  try {
    yield call(deleteTodoApi, payload)
    yield put(types.deleteTodoSucceeded(payload))
  } catch (e) {
    yield put({
      type: types.TODO_ADD_FAILED,
      payload: { message: e.message },
    })
  }
}

function* editTodos({payload}){
  try {
    const newTodo = yield call(updateTodoApi, payload)
    yield put(types.editTodoSucceeded(newTodo))
  } catch (e) {
    yield put({
      type: types.TODO_ADD_FAILED,
      payload: { message: e.message },
    })
  }
}

function* onFetchTodos(){
  yield takeLatest(types.TODOS_FETCH_REQUESTED, fetchTodos)
}

function* onAddTodo(){
  yield takeLatest(types.TODO_ADD_REQUESTED, addTodo)
}

function* onDeleteTodo(){
  yield takeLatest(types.TODO_DELETE_REQUESTED, deleteTodo)
}

function* onEditTodo(){
  yield takeLatest(types.TODO_EDIT_REQUESTED, editTodos)
}

export default function* rootTodoSagas() {
  yield all([
    fork(onFetchTodos),
    fork(onAddTodo),
    fork(onDeleteTodo),
    fork(onEditTodo),
  ])
}
