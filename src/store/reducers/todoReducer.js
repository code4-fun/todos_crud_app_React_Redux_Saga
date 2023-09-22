import * as types from '../actions/todoActions'

const initialState = {
  todos: [],
  error: null,
  loading: false
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TODOS_FETCH_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case types.TODOS_FETCH_SUCCEEDED:
      return {
        ...state,
        todos: action.payload.data,
        loading: false
      }
    case types.TODO_ADD_SUCCEEDED:
      return {
        ...state,
        todos: [...state.todos, {...action.payload}],
        loading: false
      }
    case types.TODO_DELETE_SUCCEEDED:
      return {
        ...state,
        todos: [...state.todos.filter(todo => todo.id !== action.payload)],
        loading: false
      }
    case types.TODO_EDIT_SUCCEEDED:
      return {
        ...state,
        todos: [...state.todos.map(todo => {
          if(todo.id !== action.payload.id){
            return todo
          } else {
            return {
              ...action.payload
            }
          }
        })],
        loading: false
      }
    case types.TODOS_FETCH_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}
