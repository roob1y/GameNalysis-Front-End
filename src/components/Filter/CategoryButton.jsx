import React from "react";
import styled from "styled-components";
import { capitaliseEachWord } from "../../hooks/capitaliseEachWord";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons";

const Buttons = styled.button`

  background-color: ${({ theme }) => theme.buttonColor};
  border: none;
  color: ${({ theme }) => theme.textDark};
  text-align: center;
  text-decoration: none;
  outline: ${({ theme }) => theme.outline};
  border-radius: 20px;
  font-size: 16px;
  margin: 4px 10px;
  cursor: pointer;

  @media (min-width: 600px) {
    width: 10em;
    height: 3em;
  }

  &:hover {
    background-color: #ddd;
  }
`;

export const CategoryChildrenButton = ({ children, onClick }) => {
  const outputStr = capitaliseEachWord(children);
  return <Buttons onClick={onClick}>{outputStr}</Buttons>;
};

const Button = styled.button`
  background-color: ${({ theme }) => theme.buttonColor};
  border: ${({theme}) => theme.outline};
  border-radius: 20px;
  color: ${({ theme }) => theme.textDark};
  text-align: center;
  display: inline-block;
  margin: 0 2px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 10px;

  &:hover {
    background-color: #ddd;
  }
`;

const ButtonTitle = styled.p`
  font-weight: bold;
  margin-bottom: 0;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const CategoryButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <FontAwesomeIcon size="4x" icon={faCubes} />
    <ButtonTitle>Categories</ButtonTitle>
  </Button>
);
