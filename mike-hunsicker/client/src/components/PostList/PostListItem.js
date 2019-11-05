import React from 'react';
import styles from './styles.css'

const PostListItem = props => {
  const { post, clickPost } = props;

  return (
    <div className="item" onClick={() => clickPost(post)}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default PostListItem;