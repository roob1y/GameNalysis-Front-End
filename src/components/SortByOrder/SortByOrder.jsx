import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

const AccordionContainer = styled.div`
  position: relative;
  max-width: 12em;
  border-radius: 5px;
`;

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.buttonColor};
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: 5px solid #424242;
  border-radius: 20px;
  font-size: 15px;
  transition: 0.4s;

  &:hover {
    background-color: #ddd;
  }
`;

const AccordionPanel = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  max-height: 0;
  border-radius: 20px;
  width: 100%;
  padding: 0 10px;
  background-color: white;
  overflow: auto;
  max-height: 0;
  transition: max-height 0.2s ease-out, opacity 0.2s ease-out;
  opacity: ${props => props.isOpen ? 1 : 0};
  border: ${props => props.isOpen ? `${props.theme.textDark} 1px solid` : "none"};
`;

const HeaderTitle = styled.div`
  font-weight: bold;
`;

const HeaderIcon = styled.div`
  margin-left: 1em;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.2s ease-out;
`;

const Title = styled.div`
  margin-bottom: 12px;
  font-weight: bold;
  cursor: default;
`;

const SortbyOrderOptions = styled.li`
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
  background-color: ${(props) => (props.isActive ? "#ddd" : "transparent")};
`;

const SortByOrder = ({ searchParams, setSearchParams }) => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setIsOpen(false));

  function handleSortChange(val) {
    console.log("val: ", val);
    searchParams.set("sort_by", val);
    setSearchParams(searchParams);
  }

  function handleOrderChange(val) {
    searchParams.set("order", val);
    setSearchParams(searchParams);
  }

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <AccordionHeader ref={node} onClick={handleClick}>
        <HeaderTitle>Sort and Filter</HeaderTitle>
        <HeaderIcon isOpen={isOpen}>
          <FontAwesomeIcon size={"xs"} icon={faChevronUp} />
        </HeaderIcon>
      </AccordionHeader>
      <AccordionPanel
        isOpen={isOpen}
        style={{ maxHeight: isOpen ? "10em" : "0" }}
      >
        <Title>Sort By</Title>
        <ul>
          <SortbyOrderOptions onClick={() => handleSortChange("created_at")}>
            Date Added
          </SortbyOrderOptions>
          <SortbyOrderOptions onClick={() => handleSortChange("comment_count")}>
            Comment Count
          </SortbyOrderOptions>
          <SortbyOrderOptions onClick={() => handleSortChange("votes")}>
            Votes
          </SortbyOrderOptions>
          <SortbyOrderOptions onClick={() => handleSortChange("designer")}>
            Designer
          </SortbyOrderOptions>
          <SortbyOrderOptions onClick={() => handleSortChange("owner")}>
            Owner
          </SortbyOrderOptions>
        </ul>
        <br />
        <Title>Order</Title>
        <ul>
          <SortbyOrderOptions onClick={() => handleOrderChange("desc")}>
            Descending
          </SortbyOrderOptions>
          <SortbyOrderOptions onClick={() => handleOrderChange("asc")}>
            Ascending
          </SortbyOrderOptions>
        </ul>
      </AccordionPanel>
    </AccordionContainer>
  );
};

export default SortByOrder;
