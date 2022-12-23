import { useState, useContext } from "react";
import { postCommentByReviewId } from "../../../utils/api";
import { UserContext } from "../../../contexts/User";
import AddCommentError from "./AddCommentError";


const AddComment = ({ reviewId, addCommentRender, setErr }) => {
  const { loggedUser } = useContext(UserContext);
  const [commentBody, setCommentBody] = useState("");
  const [invalidCommentTrig, setInvalidCommentTrig] = useState(false);

  const changeHandler = (event) => {
    setCommentBody(event.target.value);
  };

  const clickHandler = () => {
    if (!/\w/.test(commentBody)) {
      setInvalidCommentTrig(true);
      setTimeout(() => setInvalidCommentTrig(false), 1000);

      return;
    }
    const newComment = {
      username: loggedUser.username,
      body: commentBody,
    };

    addCommentRender({
      author: loggedUser.username,
      body: commentBody,
      comment_id: null,
      created_at: new Date(),
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
    <>
      <AddCommentError invalidCommentTrig={invalidCommentTrig}/>

      <article className="add-comment">
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
      </article>
    </>
  );
};

export default AddComment;
