import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 6em);
  justify-content: center`;

export const ErrorIcon = styled.div`
  display: flex;
  width: 100%;
  gap: 1em;
`;

export const Dice = styled.img`
  height: 5em;
  margin-top: 0.1em;
`;

export const TextAndImagesContainer = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  width: 90%;
  justify-content: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2em;
  text-align: left;
  border-radius: 1em;
  max-width: 45%;
`;

export const HeaderTwo = styled.h2`
  margin-top: 2em;
`;

export const Paragraph = styled.p`
  font-size: 1em;
  margin: 0;
`;

export const HeroImage = styled.div`
padding: 0 1em;

`;
