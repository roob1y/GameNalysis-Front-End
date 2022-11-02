import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import { getAllCategories } from "../utils/api";

const CategoryList = () => {
  const [categoryItems, setCategoryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getAllCategories().then(({ categories }) => {
      setCategoryItems(categories);
      setIsLoading(false);
    });
  }, []);
  if (!isLoading) {
    return categoryItems.map((category) => {
      return (
        <Link to={`/${category.slug}`} key={category.slug}>
          <li>{category.slug}</li>
        </Link>
      );
    });
  } else {
    return <p>is loading...</p>;
  }
  // })
};

export default CategoryList;
