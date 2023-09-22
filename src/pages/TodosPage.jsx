import React, {useEffect, useState} from 'react'
import TodoItem from '../components/TodoItem'
import {fetchTodosRequested, addTodoRequested} from '../store/actions/todoActions'
import { useDispatch, useSelector } from 'react-redux'
import NewTodoForm from "../components/NewTodoForm";
import CustomModal from "../components/CustomModal";
import UpdateForm from "../components/UpdateForm";
import {toggleModal} from "../store/actions/modalActions";

const Todos = () => {
  const [text, setText] = useState('')
  const {todos, loading} = useSelector(store => store.todos)
  const modalIsVisible = useSelector(store => store.modal.modalVisible)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodosRequested())
  }, [])

  const handleAction = e => {
    e.preventDefault()
    if(text.trim().length) {
      dispatch(addTodoRequested({
        userId: 1,
        title: text,
        completed: false
      }))
      setText('')
    }
  }

  const openEditTodoModal = todo => {
    dispatch(toggleModal({
      modalVisible: true,
      modalData: todo
    }))
  }

  return(
    <div>
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      {
        loading
          ?
          <div>Loading...</div>
          :
          todos
            .sort((a, b) => b.id - a.id)
            .map(todo =>
              <TodoItem
                openTodoForm={openEditTodoModal}
                key={todo.id}
                todo={todo} />)
      }
      {
        modalIsVisible &&
        <CustomModal
          children={<UpdateForm />}/>
      }
    </div>
  )
}

export default Todos
