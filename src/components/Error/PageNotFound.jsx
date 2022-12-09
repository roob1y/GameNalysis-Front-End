import React from "react";
import cryingSnake from "../../assets/sad_snake.png";
// import cryingLadder from "../../assets/sad_ladder.png";
import dice_zero from "../../assets/dice_zero.png";
import dice_four from "../../assets/dice_four.png";

import {
  MainContainer,
  ErrorIcon,
  TextContainer,
  CryingSnake,
  TextAndImagesContainer,
  ImgContainer,
  Paragraph,
  Dice
} from "./PageNotFound.styled";

const PageNotFound = () => {
  return (
    <MainContainer>
          <ErrorIcon>
            <Dice src={dice_four} alt="A Die of 4" />
            <Dice src={dice_zero} alt="A Die of 0" />
            <Dice src={dice_four} alt="A Die of 4" />
          </ErrorIcon>
      <TextAndImagesContainer>
      <ImgContainer>
          <CryingSnake src={cryingSnake} alt="Crying Snake" />
        </ImgContainer>
        <TextContainer>
          <Paragraph>
            You have entered a dark and gloomy forest... and you must turn back! Or
            forever be banished
          </Paragraph>
        </TextContainer>
        {/* <img src={cryingLadder} alt="Crying Snake" /> */}
      </TextAndImagesContainer>
    </MainContainer>
  );
};

export default PageNotFound;
