import React from 'react'
import {useDispatch} from "react-redux";
import {deleteTodoRequested} from "../store/actions/todoActions";

const TodoItem = ({todo, openTodoForm}) => {
  const dispatch = useDispatch()

  const deleteTodo = id => {
    dispatch(deleteTodoRequested(id))
  }

  return (
    <div className="todo_item">
      <div className="todo_item_content">
        <div>{todo.id}</div>
        <div className="todo_item_data">
          <label className="custom_checkbox">
            <input type="checkbox" checked={todo.completed} readOnly={true} />
            <span className="checkmark"></span>
          </label>
          <div className="todo_item_title">{todo.title}</div>
        </div>
      </div>
      <div className="todo_item_buttons">
        <input
          className="todo_item_button"
          type="submit"
          value="Update"
          onClick={() => openTodoForm({
            id: todo.id,
            title: todo.title,
            completed: todo.completed,
            userId: todo.userId
          })} />
        <input className="todo_item_button" onClick={() => deleteTodo(todo.id)} type="submit" value="Delete" />
      </div>
    </div>
  );
};

export default TodoItem
