export const fetchTodosApi = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  return await res.json()
}

export const addTodoApi = async todo => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(todo)
  })
  return await res.json()
}

export const deleteTodoApi = async id => {
  await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'DELETE'
  })
}

export const updateTodoApi = async todo => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(todo)
  })
  return await res.json()
}
