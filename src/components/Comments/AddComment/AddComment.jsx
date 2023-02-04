import { useState, useEffect, useContext } from "react";
import { postCommentByReviewId } from "../../../utils/api";
import { UserContext } from "../../../contexts/User";
import AddCommentError from "./AddCommentError";
import styled from "styled-components";
import { theme } from "../../../theme";

const AddCommentContainer = styled.article`
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #ccc;
  margin: 20px auto;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    border-radius: 0;
    margin: 0;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  position: relative;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: 1px solid #ccc;
  width: 100%;
  resize: none;
  position: relative;
  min-height: 1em;
  overflow: visible;
`;

const SendButton = styled.div`
  display: flex;
  position: absolute;
  padding: 6px 5px;
  color: #fff;
  border-radius: 5px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  margin: 1px;
`;

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
`;

const AddComment = ({ reviewId, addCommentRender, setErr }) => {
  const { loggedUser } = useContext(UserContext);
  const [commentBody, setCommentBody] = useState("");
  const [invalidCommentTrig, setInvalidCommentTrig] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [textAreaHeight, setTextAreaHeight] = useState(0);

  const changeHandler = (event) => {
    setCommentBody(event.target.value);
  };

  useEffect(() => {
    const textArea = document.querySelector(`#textArea`);
    setTextAreaHeight(textArea.scrollHeight);
  }, []);

  const onChange = (e) => {
    if (e.target.value === "") {
      setTextAreaHeight(39);
    } else {
      const textArea = e.target;
      textArea.style.height = "";
      textArea.style.height = textArea.scrollHeight + "px";
      setTextAreaHeight(textArea.scrollHeight);
    }
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
        <Label>Post a comment</Label>
        <TextAreaContainer>
          <TextArea
            id="textArea"
            rows={2}
            onInput={onChange}
            placeholder="comment..."
            onChange={changeHandler}
            value={commentBody}
            style={{ height: textAreaHeight }}
          />
          <SendButton>
            <box-icon
              type="solid"
              color={theme.primaryPop}
              onClick={clickHandler}
              name="send"
            ></box-icon>
          </SendButton>
          {/* {isLoading ? "Sending..." : "Send"} */}
        </TextAreaContainer>
      </AddCommentContainer>
    </>
  );
};

export default AddComment;
