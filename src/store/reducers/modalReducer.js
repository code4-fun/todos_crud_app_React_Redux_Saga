import {TOGGLE_MODAL} from '../actions/modalActions'

const initialState = {
  modalVisible: false,
  modalData: null
}

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modalVisible: action.payload.modalVisible,
        modalData: action.payload.modalData
      }
    default:
      return state
  }
}
