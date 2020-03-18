// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // console.log(props.comments);
  const [ comments, setComments ] = useState(props.Comments);
  // console.log(props.comments.text)

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {props.comments.map((item, index) => {
        // console.log(index);
        return <Comment comment={item} key ={index} />
      })
      }
      <CommentInput comments = {comments} setComments={setComments} />

    </div>
  );
};

export default CommentSection;
