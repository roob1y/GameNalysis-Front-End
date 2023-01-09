import React from "react";
import styled from "styled-components";
import { capitaliseEachWord } from "../../hooks/capitaliseEachWord";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubes } from '@fortawesome/free-solid-svg-icons'

const Buttons = styled.button`
background-color: ${({theme}) => theme.primaryPop};
border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  min-width: 10em;
  min-height: 4em;
`;

export const CategoryChildrenButton = ({ children, onClick }) => {
  const outputStr = capitaliseEachWord(children)
  return <Buttons onClick={onClick}>{outputStr}</Buttons>
}

const Button = styled.button`
background-color: white;
border: 5px solid #424242;
  border-radius: 20px;
  color: #333;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #eee;
    border-color: #999;
  }
`;

export const CategoryButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <FontAwesomeIcon size="2x" icon={faCubes} />
  </Button>
);
