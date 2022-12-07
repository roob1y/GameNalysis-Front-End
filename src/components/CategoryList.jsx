import { useEffect, useState } from "react";

import { getAllCategories } from "../utils/api";

const CategoryList = ({ searchParams, setSearchParams }) => {
  const [closed, setClosed] = useState(true);
  const [categoryItems, setCategoryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function handleParamChange(e) {
    searchParams.set("category", e.target.value );
    setSearchParams(searchParams);
    setClosed(true)
  }

  function handleClick() {
    setClosed(false);
  }

  function categoryRemoveHandler(){
    searchParams.delete("category")
    setSearchParams(searchParams)
    setClosed(true)
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
        <h1>{searchParams.get("category") ? searchParams.get("category") : `all reviews`}</h1>
        <button onClick={handleClick}>Category</button>
      </>
    );
  } else if (!isLoading) {
    return (
      <>
      <button onClick={categoryRemoveHandler}>all reviews</button>
        {categoryItems.map((category) => {
          return (
            <button
              key={category.slug}
              value={category.slug}
              onClick={handleParamChange}
            >
              {category.slug.replaceAll("-", " ")}
            </button>
          );
        })}
      </>
    );
  } else {
    <p>is loading...</p>
  }
};

export default CategoryList;
