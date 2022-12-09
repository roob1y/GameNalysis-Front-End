import React from "react";
import cryingSnakeAndLadder from "../../assets/sad_snake&sad_ladder.png";
import dice_zero from "../../assets/dice_zero.png";
import dice_four from "../../assets/dice_four.png";

import {
  MainContainer,
  TextAndImagesContainer,
  HeroImage,
  ErrorIcon,
  TextContainer,
  HeaderTwo,
  Paragraph,
  Dice,
} from "./PageNotFound.styled";

const PageNotFound = () => {
  return (
    <MainContainer>
      <TextAndImagesContainer>
        <HeroImage>
          <img src={cryingSnakeAndLadder} alt="Crying Snake and Ladders" style={{maxWidth: "90%"}} />
        </HeroImage>
        <TextContainer>
          <ErrorIcon>
            <Dice src={dice_four} alt="A Die of 4" />
            <Dice src={dice_zero} alt="A Die of 0" />
            <Dice src={dice_four} alt="A Die of 4" />
          </ErrorIcon>
          <HeaderTwo>Hello Adventurer</HeaderTwo>
          <Paragraph>
            You look around and see you have entered a dark and gloomy forest... it appears you have stumbled across something you shouldn't've. There are enemies approaching, you
            must TURN BACK NOW!
          </Paragraph>
        </TextContainer>
      </TextAndImagesContainer>
    </MainContainer>
  );
};

export default PageNotFound;
