import React from "react";
import cryingSnake from "../../assets/sad_snake.png";
// import cryingLadder from "../../assets/sad_ladder.png";
import dice_zero from "../../assets/dice_zero.png";
import dice_four from "../../assets/dice_four.png";

import { MainContainer, ErrorIcon, Container, CryingSnake } from "./PageNotFound.styled";

const PageNotFound = () => {
  return (
    <MainContainer>
      <h2>Oops...</h2>
      <Container>
        <ErrorIcon>
          <img src={dice_four} alt="A Die of 4" />
          <img src={dice_zero} alt="A Die of 0" />
          <img src={dice_four} alt="A Die of 4" />
        </ErrorIcon>
      </Container>
      <CryingSnake src={cryingSnake} alt="Crying Snake" />
      {/* <img src={cryingLadder} alt="Crying Snake" /> */}
    </MainContainer>
  );
};

export default PageNotFound;
