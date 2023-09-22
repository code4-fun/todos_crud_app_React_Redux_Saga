import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toggleModal} from "../store/actions/modalActions";
import {editTodoRequested} from '../store/actions/todoActions'

const UpdateForm = () => {
  const modalData = useSelector(store => store.modal.modalData)
  const dispatch = useDispatch()
  const [title, setTitle] = useState(modalData.title)
  const [completed, setCompleted] = useState(modalData.completed)

  const updateTodo = e => {
    e.preventDefault()
    dispatch(editTodoRequested({
      id: modalData.id,
      userId: modalData.userId,
      title: title,
      completed: completed
    }))
    dispatch(toggleModal({
      modalVisible: false,
      modalData: null
    }))
  }
  return (
    <>
      <form className="update_form">
        <textarea value={title} onChange={e => setTitle(e.target.value)} />

        <label className="custom_checkbox">Completed
          <input type="checkbox" checked={completed} onChange={() => setCompleted(!completed)} />
            <span className="checkmark"></span>
        </label>

        <input type="submit" value="Save" onClick={updateTodo} />
      </form>
    </>
  );
};

export default UpdateForm;
