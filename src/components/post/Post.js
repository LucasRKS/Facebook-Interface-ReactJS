import React from 'react';

import './Post.css';

import Comment from '../comment/Comment';

function Post({ post }) {
  return (<div key={post.id} className="post">
    <p className="author"><img class="img_perfil" src={post.author.avatar} /> <b>{post.author.name}</b><br /> <small class="post_date">{post.date}</small></p>
    <p>{post.content}</p>
    <hr></hr>
    <p class="span_comentario"><small><b>Comentários</b></small></p>
    <div>{post.comments.map(comment => <Comment key={comment.id} comment={comment} />)}</div>
  </div>);
}

export default Post;