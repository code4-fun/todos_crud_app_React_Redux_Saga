export const USER_POSTS_FETCH_REQUESTED = 'USER_POSTS_FETCH_REQUESTED'
export const USER_POSTS_FETCH_SUCCEEDED = 'USER_POSTS_FETCH_SUCCEEDED'
export const USER_POSTS_FETCH_FAILED = 'USER_POSTS_FETCH_FAILED'

export const fetchUserPostsRequested = payload => ({
  type: USER_POSTS_FETCH_REQUESTED,
  payload
})

export const fetchUserPostsSucceeded = () => ({
  type: USER_POSTS_FETCH_SUCCEEDED
})

export const fetchUserPostsFailed = () => ({
  type: USER_POSTS_FETCH_FAILED
})
