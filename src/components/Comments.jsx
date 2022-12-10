import React from "react";
import { useState } from "react";
import AddComment from "./AddComment";
import ListComments from "./ListComments";

const Comments = ({ userReview, addCommentRender, newCommentData, idInc }) => {
  const [err, setErr] = useState(null)
  if (err) return <p>{err.message}. Please try again...</p>;
  return (
    <div>
      <AddComment
        reviewId={userReview.review_id}
        addCommentRender={addCommentRender}
        setErr={setErr}
      />
      <section>
        <ListComments
          reviewId={userReview.review_id}
          newCommentData={newCommentData}
          idInc={idInc}
        />
      </section>
    </div>
  );
};

export default Comments;
