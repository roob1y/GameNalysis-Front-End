import { useState, useEffect } from "react";
import { getCommentsByReviewId } from "../../../utils/api";
import CardComments from "../CardComments";
import { number } from "prop-types";
import Pagination from "../Pagination/Pagination";
import styled from "styled-components";

const CommentsWrapper = styled.ul`
  margin: 0 auto;
  width: 700px;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const ListComments = ({ reviewId, newCommentData, idInc, commentCount }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [maxId, setMaxId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // change page size to change amount of comments displayed
  const pageSize = 5;

  useEffect(() => {
    setIsLoading(true);
    getCommentsByReviewId(reviewId, currentPage, pageSize)
      .then(({ comments }) => {
        const idArr = comments.map((comment) => comment.comment_id);
        setMaxId(Math.max(...idArr));
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err);
      });
  }, [reviewId, currentPage, pageSize]);

  useEffect(() => {
    if (newCommentData) {
      newCommentData["comment_id"] = maxId + idInc;
      setComments((comments) => [newCommentData, ...comments]);
    }
  }, [newCommentData, maxId, idInc]);

  if (err) return <p>{err.response.data.msg}. Please try again...</p>;
  if (comments.length === 0) {
    return <p>No Comments</p>;
  } else if (!isLoading && comments.length > 0) {
    return (
      <article>
        <CommentsWrapper>
          {comments.map((comment) => {
            return <CardComments key={comment.comment_id} comments={comment} />;
          })}
        </CommentsWrapper>
        <Pagination
          onPageChange={(page) => setCurrentPage(page)}
          totalCount={commentCount}
          currentPage={currentPage}
          pageSize={pageSize}
        />
      </article>
    );
  } else {
    return <p>is loading...</p>;
  }
};

ListComments.propTypes = {
  idInc: number.isRequired,
  reviewId: number.isRequired,
};

export default ListComments;
