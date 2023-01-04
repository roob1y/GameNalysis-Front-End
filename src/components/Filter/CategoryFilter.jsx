import { useEffect, useState } from "react";
import { Button, CategoryIcon, Box } from "./CategoryFilter.styled";
import { getAllCategories } from "../../utils/api";
import {CategoryChildrenButton, CategoryButton} from "./CategoryButton";

const CategoryFilter = ({ searchParams, setSearchParams, setCurrentPage }) => {
  const [closed, setClosed] = useState(true);
  const [categoryItems, setCategoryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function handleParamChange(category) {
    searchParams.set("category", category.slug);
    setSearchParams(searchParams);
    setCurrentPage(1);
    setClosed(true);
  }

  function handleClick() {
    setClosed(false);
  }

  function categoryRemoveHandler() {
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

  if (closed) {
    return (
      <>
        <h1>
          {searchParams.get("category")
            ? searchParams.get("category")
            : `all reviews`}
        </h1>
        <CategoryButton onClick={handleClick}/>
      </>
    );
  } else if (!isLoading) {
    return (
      <>
        <CategoryChildrenButton children={"all reviews"} onClick={categoryRemoveHandler}/>
        {categoryItems.map((category) => {
          return (
            <CategoryChildrenButton key={category.slug} children={category.slug} onClick={() => handleParamChange(category)} />
          );
        })}
      </>
    );
  } else {
    <p>is loading...</p>;
  }
};

export default CategoryFilter;
