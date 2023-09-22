import React from 'react';
import {useDispatch} from "react-redux";
import {toggleModal} from "../store/actions/modalActions";

const CustomModal = ({children}) => {
  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(toggleModal({
      modalVisible: false,
      modalData: null
    }))
  }

  return (
    <div className="modal_outer" onClick={closeModal}>
      <div className="modal_inner" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
