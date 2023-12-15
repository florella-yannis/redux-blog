import React from "react";
import { useDispatch } from "react-redux";
import { addPostLike } from "../actions/post.action";

const Like = ({ post }) => {

  const dispatch = useDispatch();
  
  const handleLike = () => {


    const postData = {
      title: post.title,
      author: post.autlor,
      content: post.content,
      id:post.id,
      likes: post.likes + 1,
    }

    dispatch(addPostLike(postData));
  }

  return (
    <div>
      <img src="./icons/clap.png" className="clap" alt="clap" onClick={()=>handleLike()} />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
