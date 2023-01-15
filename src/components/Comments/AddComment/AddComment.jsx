import { useState, useContext } from "react";
import { postCommentByReviewId } from "../../../utils/api";
import { UserContext } from "../../../contexts/User";
import AddCommentError from "./AddCommentError";
import styled from "styled-components";

const AddCommentContainer = styled.article`
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #ccc;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;
const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  resize: none;

`;
const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({theme}) => theme.primaryPop};
  color: #fff;
  border-radius: 5px;
  border: none;
  font-size: 14px;
  cursor: pointer;
`;
const PostBtnContainer = styled.div`
  text-align: right;
`;

const AddComment = ({ reviewId, addCommentRender, setErr }) => {
  const { loggedUser } = useContext(UserContext);
  const [commentBody, setCommentBody] = useState("");
  const [invalidCommentTrig, setInvalidCommentTrig] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const changeHandler = (event) => {
    setCommentBody(event.target.value);
  };

  const clickHandler = () => {
    if (!/\w/.test(commentBody)) {
      setInvalidCommentTrig(true);
      setTimeout(() => setInvalidCommentTrig(false), 1000);

      return;
    }
    setIsLoading(true);
    const newComment = {
      username: loggedUser.username,
      body: commentBody,
    };

    addCommentRender({
      author: loggedUser.username,
      body: commentBody,
      comment_id: null,
      created_at: new Date(),
      review_id: reviewId,
      votes: 0,
    });

    postCommentByReviewId(reviewId, newComment)
      .then(() => {
        setIsLoading(false);
        setCommentBody("");
      })
      .catch((err) => {
        setIsLoading(false);
        setErr(err);
      });
  };
  return (
    <>
      <AddCommentError invalidCommentTrig={invalidCommentTrig} />
      <AddCommentContainer>
        <Label>Add a comment</Label>

        <TextArea
          placeholder="Add a comment"
          onChange={changeHandler}
          value={commentBody}
        ></TextArea>
        <PostBtnContainer>
          <Button className="add-btn" onClick={clickHandler}>
            {isLoading ? "Sending..." : "Send"}
          </Button>
        </PostBtnContainer>
      </AddCommentContainer>
    </>
  );
};

export default AddComment;
