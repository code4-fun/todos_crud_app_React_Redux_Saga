import { combineReducers } from 'redux'
import { postReducer } from './reducers/postReducer'
import { todoReducer } from './reducers/todoReducer'
import { modalReducer } from './reducers/modalReducer'
import createSagaMiddleware from 'redux-saga'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { all } from 'redux-saga/effects'
import rootPostSaga from './sagas/postSagas'
import rootTodoSagas from './sagas/todoSagas'
import {call, spawn} from "@redux-saga/core/effects"

export const rootReducer = combineReducers({
  posts: postReducer,
  todos: todoReducer,
  modal: modalReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
)

export function* rootSaga() {
  const sagas = [
    rootPostSaga,
    rootTodoSagas
  ]

  const retrySagas = yield sagas.map(saga => {
    return spawn(function* (){
      while(true){
        try{
          yield call(saga)
          break
        } catch(e){
          console.log(e)
        }
      }
    })
  })

  yield all(retrySagas)
}

sagaMiddleware.run(rootSaga)

export default store
