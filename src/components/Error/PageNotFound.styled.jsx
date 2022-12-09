import styled from "styled-components";

export const MainContainer = styled.div`
  border: 1px solid black;
  height: 100vh;
`;

export const Container = styled.div`
  display: inline-flex;
  border: 1px solid black;
  width: 60%;
  height: 50vh;
`;

export const ErrorIcon = styled.div`
  display: flex;
  margin-top: 1em;
  width: 100%;
  height: 20%;
  justify-content: center;
  gap: 1em;
`;

export const CryingSnake = styled.img`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
`;
