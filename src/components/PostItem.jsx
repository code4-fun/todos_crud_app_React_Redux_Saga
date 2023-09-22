import React from 'react'

const PostItem = ({post}) => {
  return (
    <div className="post_item">
      <div>{post.id}</div>
      <div>{post.title}</div>
    </div>
  );
};

export default PostItem
