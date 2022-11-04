import { useState, useEffect } from "react";
import { getCommentsByReviewId } from "../utils/api";

const Comments = ({reviewId}) => {  
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
      <section>
      <h2>Comments</h2>
      
      </section>
    )
  } else {
    return <p>is loading...</p>
  }
}

export default Comments;