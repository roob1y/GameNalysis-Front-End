const CardComments = ({comments}) => {
  console.log(comments);
  return (
    <li >
      <p>{comments.body}</p>
    </li>
  )
}
export default CardComments;