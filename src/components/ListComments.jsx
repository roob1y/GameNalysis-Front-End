import { useState, useEffect } from "react";
import { getCommentsByReviewId } from "../utils/api";
import CardComments from "./CardComments";

const ListComments = ({reviewId}) => {  
  const [comments, setComments] = useState()
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    getCommentsByReviewId(reviewId)
    .then(({comments}) => {
      setComments(comments)
      setIsLoading(false)
    })
  }, [reviewId])

  if (!isLoading) {
    return (
      <ul className="commentList">
        {comments.map(comment => {
          return <CardComments key={comment.comment_id} comments={comment}/>
        })}
      </ul>
      )
  } else {
    return <p>is loading...</p>
  }
}

export default ListComments;