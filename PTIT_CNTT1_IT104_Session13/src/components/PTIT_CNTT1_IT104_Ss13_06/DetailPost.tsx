import React from 'react'

type Post = {
    id:number;
    title:string;
    content:string;
    author:string;
}

type PropTypes = {
    post:Post;
}
const DetailPost = ({post}: PropTypes) => {
  return (
    <div>
      <p>ID: {post.id}</p>
      <p>Title: {post.title}</p>
      <p>Content: {post.content}</p>
      <p>Author: {post.author}</p>
      <hr/>
    </div>
  )
}

export default DetailPost
