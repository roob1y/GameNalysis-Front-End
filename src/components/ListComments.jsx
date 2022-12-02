import { useState, useEffect } from "react";
import { getCommentsByReviewId } from "../utils/api";
import CardComments from "./CardComments";

const ListComments = ({reviewId, newCommentData}) => {  
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    getCommentsByReviewId(reviewId)
    .then(({comments}) => {
      setComments(comments)
      setIsLoading(false)
    }).catch((err) => {
      if (err.response.status === 404){
        setIsLoading(false)
      }
    })
  }, [reviewId])

  console.log(newCommentData);

  if (!isLoading && comments.length > 0) {
    return (
      <ul className="commentList">
        {comments.map(comment => {
          return <CardComments key={comment.comment_id} comments={comment}/>
        })}
      </ul>
      )
  } else if (comments.length === 0) {
    return <p>No Comments</p>
  } else {
    return <p>is loading...</p>
  }
}

export default ListComments;