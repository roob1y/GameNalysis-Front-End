import { useState } from "react";
import { postCommentByReviewId } from "../utils/api";

const AddComment = ({reviewId}) => {
  const [comment, setComment] = useState({});
  const [commentBody, setCommentBody] = useState("")

  const changeHandler = (event) => {
    setCommentBody(event.target.value);
  }

  const clickHandler = () => {
    if (comment === "" || comment === " ") return;
    const newComment = {
      "username": "bainesface",
      "body": commentBody,
    };
    setComment(newComment);
    postCommentByReviewId(reviewId, comment);
  };

  return (
    <div className="add-comment">
      <textarea
        className="comment-input"
        placeholder="Add a comment"
        onChange={changeHandler}>
      </textarea>
      <div className="postBtnContainer">
        <button className="add-btn" onClick={clickHandler}>send</button>
      </div>
    </div>
  );
};

export default AddComment;
