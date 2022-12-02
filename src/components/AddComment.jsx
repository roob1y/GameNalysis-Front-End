import { useState } from "react";
import { postCommentByReviewId } from "../utils/api";

const AddComment = ({ reviewId, addCommentRender }) => {
  const [commentBody, setCommentBody] = useState("");

  const changeHandler = (event) => {
    setCommentBody(event.target.value);
  };

  const clickHandler = () => {
    const newComment = {
      username: "happyamy2016",
      body: commentBody,
    };

    addCommentRender({
      author: "happyamy2016",
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
