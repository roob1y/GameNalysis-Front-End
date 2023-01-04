import React from "react";
import styled from "styled-components";
import { capitaliseEachWord } from "../../hooks/capitaliseEachWord";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'

const Buttons = styled.button`
  /* Add your button styles here */
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

export const CategoryChildrenButton = ({ children, onClick }) => {
  const outputStr = capitaliseEachWord(children)
  return <Buttons onClick={onClick}>{outputStr}</Buttons>
}

const Button = styled.button`
  /* Add your button styles here */
  background-color: #f3f3f3;
  border: 1px solid #ccc;
  border-radius: 4px;
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

export const CategoryButton = ({ children, onClick }) => (
  <Button onClick={onClick}>
    <FontAwesomeIcon size="2x" icon={faGamepad} />
  </Button>
);
