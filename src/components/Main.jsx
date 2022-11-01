import ListReviews from "./ListReviews";
import CategoryList from "./CategoryList";

import { getAllReviews } from "../utils/api";

import { useParams } from "react-router-dom";

import { useState } from "react";

const Main = () => {
  const { category } = useParams();
  const [allReviews, setAllReviews] = useState([]);
  getAllReviews().then(({ reviews }) => {
    if (category) {
      const filteredReviews = reviews.filter(
        (review) => review.category === category
      );
      setAllReviews(filteredReviews);
    } else {
      setAllReviews(reviews);
    }
  });
  return (
    <>
      <main className="main">
        <h2>Reviews</h2>
        <CategoryList categoryOptions />
        <ListReviews allReviews={allReviews} />
      </main>
    </>
  );
};

export default Main;
