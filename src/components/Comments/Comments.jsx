import React from "react";
import { useState } from "react";
import AddComment from "./AddComment";
import ListComments from "./ListComments";
import { func, number } from "prop-types";
import styled from "styled-components";

const CommentContainer = styled.div`
  margin: 20px auto;
`;

const Comments = ({ userReview, addCommentRender, newCommentData, idInc }) => {
  const [err, setErr] = useState(null);
  if (err) return <p>{err.message}. Please try again...</p>;
  return (
    <CommentContainer>
      <AddComment
        reviewId={userReview.review_id}
        addCommentRender={addCommentRender}
        setErr={setErr}
      />
      <ListComments
        reviewId={userReview.review_id}
        newCommentData={newCommentData}
        idInc={idInc}
        commentCount={userReview.comment_count}
      />
    </CommentContainer>
  );
};

Comments.propTypes = {
  addCommentRender: func.isRequired,
  idInc: number.isRequired,
};

export default Comments;
