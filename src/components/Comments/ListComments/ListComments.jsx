import { useState, useEffect } from "react";
import { getCommentsByReviewId } from "../../../utils/api";
import CardComments from "../CardComments";
import { number } from "prop-types";
import Pagination from "../Pagination/Pagination";

const ListComments = ({ reviewId, newCommentData, idInc, commentCount }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [maxId, setMaxId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  let PageSize = 10;

  useEffect(() => {
    setIsLoading(true);
    getCommentsByReviewId(reviewId)
      .then(({ comments }) => {
        const idArr = comments.map((comment) => comment.comment_id);
        setMaxId(Math.max(...idArr));
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err);
      });
  }, [reviewId]);

  useEffect(() => {
    if (newCommentData) {
      newCommentData["comment_id"] = maxId + idInc;
      setComments((comments) => [newCommentData, ...comments]);
    }
  }, [newCommentData, maxId, idInc]);

  if (err) return <p>{err.response.data.msg}. Please try again...</p>;
  if (!isLoading && comments.length > 0) {
    return (
      <article className="commentList">
        <ul>
          {comments.map((comment) => {
            return <CardComments key={comment.comment_id} comments={comment} />;
          })}
        </ul>
        <Pagination onPageChange={page => setCurrentPage(page)} totalCount={commentCount} currentPage={currentPage} pageSize={PageSize} />
      </article>
    );
  } else if (comments.length === 0) {
    return <p>No Comments</p>;
  } else {
    return <p>is loading...</p>;
  }
};

ListComments.propTypes = {
  idInc: number.isRequired,
  reviewId: number.isRequired,
};

export default ListComments;
