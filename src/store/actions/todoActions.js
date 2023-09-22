export const TODOS_FETCH_REQUESTED = 'TODOS_FETCH_REQUESTED'
export const TODOS_FETCH_SUCCEEDED = 'TODOS_FETCH_SUCCEEDED'
export const TODOS_FETCH_FAILED = 'TODOS_FETCH_FAILED'

export const TODO_ADD_REQUESTED = "TODO_ADD_REQUESTED";
export const TODO_ADD_SUCCEEDED = "TODO_ADD_SUCCEEDED";
export const TODO_ADD_FAILED = "TODO_ADD_FAILED";

export const TODO_DELETE_REQUESTED = "TODO_DELETE_REQUESTED";
export const TODO_DELETE_SUCCEEDED = "TODO_DELETE_SUCCEEDED";
export const TODO_DELETE_FAILED = "TODO_DELETE_FAILED";

export const TODO_EDIT_REQUESTED = "TODO_EDIT_REQUESTED";
export const TODO_EDIT_SUCCEEDED = "TODO_EDIT_SUCCEEDED";
export const TODO_EDIT_FAILED = "TODO_EDIT_FAILED";

export const fetchTodosRequested = () => ({
  type: TODOS_FETCH_REQUESTED
})

export const fetchTodosSucceeded = todos => ({
  type: TODOS_FETCH_SUCCEEDED,
  payload: todos
})

export const fetchTodosFailed = (error) => ({
  type: TODOS_FETCH_FAILED,
  payload: error
})

export const addTodoRequested = todo => ({
  type: TODO_ADD_REQUESTED,
  payload: todo
})

export const addTodoSucceeded = todo => ({
  type: TODO_ADD_SUCCEEDED,
  payload: todo
})

export const addTodoFailed = (error) => ({
  type: TODO_ADD_FAILED,
  payload: error
})

export const deleteTodoRequested = id => ({
  type: TODO_DELETE_REQUESTED,
  payload: id
})

export const deleteTodoSucceeded = id => ({
  type: TODO_DELETE_SUCCEEDED,
  payload: id
})

export const deleteTodoFailed = (error) => ({
  type: TODO_DELETE_FAILED,
  payload: error
})

export const editTodoRequested = todo => ({
  type: TODO_EDIT_REQUESTED,
  payload: todo
})

export const editTodoSucceeded = todo => ({
  type: TODO_EDIT_SUCCEEDED,
  payload: todo
})

export const editTodoFailed = (error) => ({
  type: TODO_EDIT_FAILED,
  payload: error
})
