import { useState, useContext } from "react";
import { UserContext } from "../contexts/User";

const CardComments = ({ comments }) => {
  const [commentDel, setCommentDel] = useState(false);
  const { loggedUser } = useContext(UserContext);
  return (
    !commentDel && (
      <li className="userCommentCard">
        {comments.author === loggedUser && (
          <button onClick={() => setCommentDel(true)}>X</button>
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
