import CardReviews from "./CardReviews";
import CategoryList from "./CategoryList";

import { getAllReviews } from "../utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ListReviews = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();
  useEffect(() => {
    setIsLoading(true);
    getAllReviews().then(({ reviews }) => {
      if (category) {
        const filteredReviews = reviews.filter(
          (review) => review.category === category
        );
        setReviewsData(filteredReviews);
      } else {
        setReviewsData(reviews);
      }
      setIsLoading(false);
    });
  }, [category]);
  if (!isLoading) {
    return (
      <>
        <CategoryList />
        <h2>Reviews</h2>
        <ul className="reviewList">
          {reviewsData.map((review) => (
            <CardReviews key={review.review_id} review={review} />
          ))}
        </ul>
      </>
    );
  } else {
    return <p>is loading...</p>
  }
};

export default ListReviews;
