const CardComments = ({comments}) => {
  console.log(comments);
  return (
    <li className="userCommentCard">
      <h3>{comments.author}</h3>
      <p>{comments.body}</p>
      <p>votes: {comments.votes}</p>
      <p>posted: {new Date(comments.created_at).toLocaleDateString()}</p>
    </li>
  )
}
export default CardComments;