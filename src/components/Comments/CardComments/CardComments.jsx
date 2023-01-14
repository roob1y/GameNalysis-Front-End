import { useState, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../contexts/User";
import { deleteCommentById } from "../../../utils/api";

const CommentCard = styled.li`
  outline: ${({theme}) => theme.outline};
  margin: 1% 2%;
  padding: 0.5em;

  h3,
    p {
      color: white;
  }
`;

const CardComments = ({ comments }) => {
  const [commentDel, setCommentDel] = useState(false);
  const { loggedUser } = useContext(UserContext);

  function handleOnClick() {
    setCommentDel(true);
    deleteCommentById(comments.comment_id);
  }

  return (
    !commentDel && (
      <CommentCard style={{ backgroundColor: "teal" }}>
        {comments.author === loggedUser.username && (
          <button onClick={handleOnClick}>X</button>
        )}
        <h3>{comments.author}</h3>
        <p>{comments.body}</p>
        <p>votes: {comments.votes}</p>
        <p>posted: {new Date(comments.created_at).toLocaleDateString()}</p>
      </CommentCard>
    )
  );
};
export default CardComments;
