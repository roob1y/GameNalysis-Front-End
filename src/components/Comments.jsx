import React from "react";
import AddComment from "./AddComment";
import ListComments from "./ListComments";

const Comments = ({ userReview, addCommentRender, newCommentData, idInc }) => {
  return (
    <div>
      <h1>Comments Test</h1>
      <AddComment
        reviewId={userReview.review_id}
        addCommentRender={addCommentRender}
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
