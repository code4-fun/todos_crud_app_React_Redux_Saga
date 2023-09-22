import React, {useEffect} from 'react'
import PostItem from '../components/PostItem'
import { useDispatch, useSelector } from 'react-redux'
import {fetchUserPostsRequested} from '../store/actions/postActions'

const Posts = () => {
  const {posts, loading} = useSelector(store => store.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserPostsRequested({
      userId: 1
    }))
  }, [])

  return(
    <div>
      {
        loading
          ?
          <div>Loading...</div>
          :
          posts.map(post => <PostItem key={post.id} post={post} />)
      }
    </div>
  )
}

export default Posts
