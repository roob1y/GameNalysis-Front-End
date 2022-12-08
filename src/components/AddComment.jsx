import { useState } from "react";
import { postCommentByReviewId } from "../utils/api";

const AddComment = ({ reviewId, addCommentRender, loggedUser}) => {
  const [commentBody, setCommentBody] = useState("");

  const changeHandler = (event) => {
    setCommentBody(event.target.value);
  };

  const clickHandler = () => {
    const newComment = {
      username: loggedUser,
      body: commentBody,
    };

    addCommentRender({
      author: loggedUser,
      body: commentBody,
      comment_id: null,
      created_at: new Date().toLocaleDateString(),
      review_id: reviewId,
      votes: 0,
    });
    postCommentByReviewId(reviewId, newComment);
  };

  return (
    <div className="add-comment">
      <textarea
        className="comment-input"
        placeholder="Add a comment"
        onChange={changeHandler}
      ></textarea>
      <div className="postBtnContainer">
        <button className="add-btn" onClick={clickHandler}>
          send
        </button>
      </div>
    </div>
  );
};

export default AddComment;
