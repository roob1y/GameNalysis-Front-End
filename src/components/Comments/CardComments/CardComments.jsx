import { useState, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../contexts/User";
import { deleteCommentById } from "../../../utils/api";

const CommentCard = styled.li`
  position: relative;
  margin: 2% 2%;
  padding: 0.5em;
  border-radius: 10px;
  background-color: #f5f5f5;
`;

const VoteBtn = styled.div`
  position: absolute;
  cursor: pointer;
  right: 3%;
  bottom: 10%;
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
      <CommentCard>
        {comments.author === loggedUser.username && (
          <box-icon
            style={{cursor: "pointer", position: "absolute", right: "2%" }}
            color="#C5C4C4"
            size="sm"
            onClick={handleOnClick}
            name="x"
          />
        )}
        <h3>{comments.author}</h3>
        <p>{comments.body}</p>
        <VoteBtn>
        <box-icon
            type="solid"
            style={{cursor: "pointer", position: "relative", right: "2%" }}
            size="md"
            name="heart"
          />
          <p style={{ margin: "0", color: "white", position: "absolute", top: "43%", left: "48%", transform: "translate(-50%, -50%)", fontWeight: "bold", fontSize: "10px"}}>{comments.votes}</p>
        </VoteBtn>
        <p>posted: {new Date(comments.created_at).toLocaleDateString()}</p>
      </CommentCard>
    )
  );
};
export default CardComments;
