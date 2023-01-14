import { useState, useEffect, useRef } from "react";
import { capitaliseEachWord } from "../../hooks/capitaliseEachWord";
import { CategoryChildrenButton, CategoryButton } from "./CategoryButton";
import { getAllCategories } from "../../utils/api";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import styled from "styled-components";

const CategoryFilterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const CategoryFilter = ({
  searchParams,
  setSearchParams,
  setCurrentPage,
  setOutputStr,
  setSortByDisplay,
}) => {
  const [closed, setClosed] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryItems, setCategoryItems] = useState([]);

  const node = useRef();
  useOnClickOutside(node, () => handleClick(true));

  function handleParamChange(category) {
    searchParams.set("category", category.slug);
    setSearchParams(searchParams);
    setCurrentPage(1);
    setClosed(true);
    setSortByDisplay(true);
  }

  function handleClick(boolean) {
    setClosed(boolean);
    setSortByDisplay(boolean);
  }

  function categoryRemoveHandler() {
    setSortByDisplay(true);
    searchParams.delete("category");
    setSearchParams(searchParams);
    setClosed(true);
  }

  useEffect(() => {
    setIsLoading(true);
    getAllCategories().then(({ categories }) => {
      setCategoryItems(categories);
      setIsLoading(false);
    });
  }, []);

  let newOutputStr = "";

  useEffect(() => {
    setOutputStr(newOutputStr);
  }, [searchParams, setOutputStr, newOutputStr]);

  if (closed) {
    newOutputStr = searchParams.get("category")
      ? capitaliseEachWord(searchParams.get("category"))
      : "All Reviews";

    return (
      <>
        <CategoryButton onClick={() => handleClick(false)} />
      </>
    );
  } else if (!isLoading) {
    return (
      <CategoryFilterContainer ref={node}>
        <CategoryChildrenButton
          children={"All Reviews"}
          onClick={categoryRemoveHandler}
        />
        {categoryItems.map((category) => {
          return (
            <CategoryChildrenButton
              key={category.slug}
              children={category.slug}
              onClick={() => handleParamChange(category)}
            />
          );
        })}
      </CategoryFilterContainer>
    );
  } else {
    <p>is loading...</p>;
  }
};

export default CategoryFilter;
