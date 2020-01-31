import React from 'react';

import './Comment.css';

function Comment({ comment }) {
  return (<div className="comment_box">
    <div className="comment_content"><p className="comment_author"><img class="img_perfil" src={comment.author.avatar}/><b>{comment.author.name}</b></p> 
    <p className="comment">{comment.content}</p></div>
  </div>);  
}

export default Comment;