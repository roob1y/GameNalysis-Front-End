import { useState, useEffect, useRef } from "react";
import { capitaliseEachWord } from "../../hooks/capitaliseEachWord";
import { CategoryChildrenButton, CategoryButton } from "./CategoryButton";
import { getAllCategories } from "../../utils/api";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

const CategoryFilter = ({
  searchParams,
  setSearchParams,
  setCurrentPage,
  setOutputStr,
}) => {
  const [closed, setClosed] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryItems, setCategoryItems] = useState([]);

  const node = useRef();
  useOnClickOutside(node, () => setClosed(true));

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
        <CategoryButton onClick={handleClick} />
      </>
    );
  } else if (!isLoading) {
    return (
      <div ref={node}>
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
      </div>
    );
  } else {
    <p>is loading...</p>;
  }
};

export default CategoryFilter;
