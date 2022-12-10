import { useState, useContext } from "react";
import { postCommentByReviewId } from "../utils/api";
import { UserContext } from "../contexts/User";

const AddComment = ({ reviewId, addCommentRender, setErr }) => {
  const { loggedUser } = useContext(UserContext);

  const [commentBody, setCommentBody] = useState("");

  const changeHandler = (event) => {
    setCommentBody(event.target.value);
  };

  const clickHandler = () => {
    const newComment = {
      username: loggedUser.username,
      body: commentBody,
    };

    addCommentRender({
      author: loggedUser.username,
      body: commentBody,
      comment_id: null,
      created_at: new Date().toLocaleDateString(),
      review_id: reviewId,
      votes: 0,
    });
    
    postCommentByReviewId(reviewId, newComment)
      .then(() => {})
      .catch((err) => {
        setErr(err);
      });
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
