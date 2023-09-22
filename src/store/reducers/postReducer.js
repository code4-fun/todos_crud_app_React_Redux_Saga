import {
  USER_POSTS_FETCH_FAILED,
  USER_POSTS_FETCH_REQUESTED,
  USER_POSTS_FETCH_SUCCEEDED,
} from '../actions/postActions'

const initialState = {
  posts: [],
  error: null,
  loading: false,
}

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_POSTS_FETCH_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case USER_POSTS_FETCH_SUCCEEDED: {
      const posts = action.payload.data
      return {
        ...state,
        posts,
        loading: false
      }
    }
    case USER_POSTS_FETCH_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}
