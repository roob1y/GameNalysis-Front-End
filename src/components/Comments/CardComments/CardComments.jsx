import { useState, useContext } from "react";
import { UserContext } from "../../../contexts/User";
import { deleteCommentById } from "../../../utils/api";

const CardComments = ({ comments }) => {
  const [commentDel, setCommentDel] = useState(false);
  const { loggedUser } = useContext(UserContext);

  function handleOnClick() {
    setCommentDel(true);
    deleteCommentById(comments.comment_id);
  }

  return (
    !commentDel && (
      <li style={{backgroundColor: "white"}} className="userCommentCard">
        {comments.author === loggedUser.username && (
          <button onClick={handleOnClick}>X</button>
        )}
        <h3>{comments.author}</h3>
        <p>{comments.body}</p>
        <p>votes: {comments.votes}</p>
        <p>posted: {new Date(comments.created_at).toLocaleDateString()}</p>
      </li>
    )
  );
};
export default CardComments;
