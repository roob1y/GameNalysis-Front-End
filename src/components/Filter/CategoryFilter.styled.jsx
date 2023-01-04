import styled from "styled-components";

export const Button = styled.button`
  background-image: linear-gradient(
    to right top,
    #a54dc2,
    #9c4bc5,
    #914ac8,
    #8549cc,
    #7848cf
  );
  width: 3.5em;
  height: 3.5em;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 8px;
  justify-content: center;
  padding: 0;
  &hover: {
    filter: brightness(60%);
  }
`;

export const CategoryIcon = styled.div`
  height: 100%;
  width: 100%;
  display: inline-flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2px;
`;

export const Box = styled.div`
  border: solid 2px #d14cd9;
  border-radius: 4px;
  background-color: white;
  height: 35%;
  width: 35%;
`;
