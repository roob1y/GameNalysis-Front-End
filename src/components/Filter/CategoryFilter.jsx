import { useEffect, useState } from "react";
import { getAllCategories } from "../../utils/api";
import { capitaliseEachWord } from "../../hooks/capitaliseEachWord";
import { CategoryChildrenButton, CategoryButton } from "./CategoryButton";

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
  
  console.log(searchParams.get("category"));
  if (closed) {
    if (searchParams.get("category")) {
      const outputStr = capitaliseEachWord(searchParams.get("category"));
      return (
        <>
          <p>
            {searchParams.get("category") ? outputStr.split("") : `All Reviews`}
          </p>
          <CategoryButton onClick={handleClick} />
        </>
      );
    }
    return <CategoryButton onClick={handleClick} />
  } else if (!isLoading) {
    return (
      <>
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
      </>
    );
  } else {
    <p>is loading...</p>;
  }
};

export default CategoryFilter;
