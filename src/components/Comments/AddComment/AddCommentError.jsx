import React from "react";

import { Container } from "./AddCommentError.styled";
import { CSSTransition } from "react-transition-group";

const AddCommentError = ({ invalidCommentTrig }) => {
  return (
    <CSSTransition
      in={invalidCommentTrig}
      timeout={500}
      classNames="fade"
      unmountOnExit
    >
      <Container>
        <h3>Characters are needed to post a comment!</h3>
      </Container>
    </CSSTransition>
  );
};

export default AddCommentError;
