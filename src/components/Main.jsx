import ListReviews  from "./ListReviews";
import CategoryList from "./CategoryList";

import { getAllReviews } from "../utils/api";

import { useState } from "react";

const Main = () => {
  const [reviews, setReviews] = useState([]);
  getAllReviews().then(({ reviews }) => {
    setReviews(reviews);
  });
  return (
    <>
      <main className="main">
        <h2>Reviews</h2>
        <CategoryList />
        <ListReviews reviews={reviews} />
      </main>
    </>
  );
};

export default Main;
