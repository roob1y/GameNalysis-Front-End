import styled from "styled-components";

export const MainContainer = styled.div`
  border: 1px solid black;
  height: 100vh;
`;

export const TextAndImagesContainer = styled.div`
  display: flex;
  width: fit-content;
  justify-content: center;
`;

export const TextContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  border: 1px solid gray;
  width: 60%;
  height: 60vh;
  justify-content: center;
`;

export const Paragraph = styled.p`
  font-size: 2em;
  text-align: right;
  margin: 1.5em;
`;

export const ErrorIcon = styled.div`
  display: flex;
  margin-top: 1em;
  width: 100%;
  height: 10%;
  justify-content: center;
  gap: 1em;
`;

export const Dice = styled.img``;

export const ImgContainer = styled.div`
  z-index: 1;
  display: inline-flex;
  position: relative;
  left: 5em;
  align-items: flex-end;
`;

export const CryingSnake = styled.img`
  display: flex;
  flex-wrap: wrap;
  width: 15em;
  height: 15em;
`;
