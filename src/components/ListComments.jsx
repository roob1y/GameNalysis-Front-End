import { useState, useEffect } from "react";
import { getCommentsByReviewId } from "../utils/api";
import CardComments from "./CardComments";

const ListComments = ({ reviewId, newCommentData, idInc }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [maxId, setMaxId] = useState(null);

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
        if (err.response.status === 404) {
          setIsLoading(false);
        }
      });
  }, [reviewId]);

  useEffect(() => {
    if (newCommentData) {
      newCommentData["comment_id"] = maxId + idInc;
      setComments((comments) => [newCommentData, ...comments]);
    }
  }, [newCommentData, maxId, idInc]);

  // useEffect(() => {
  //   setComments([...comments] + newCommentData)
  // }, [newCommentData])

  if (!isLoading && comments.length > 0) {
    return (
      <ul className="commentList">
        {comments.map((comment) => {
          return <CardComments key={comment.comment_id} comments={comment} />;
        })}
      </ul>
    );
  } else if (comments.length === 0) {
    return <p>No Comments</p>;
  } else {
    return <p>is loading...</p>;
  }
};

export default ListComments;
