import CardReviews from "./CardReviews";
import CategoryList from "./CategoryList";
import { getAllReviews } from "../utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const ListReviews = ({reviews}) => {
  const [reviewsData, setReviewsData] = useState([]);
  const {category} = useParams();
  console.log('category: ', category);

  useEffect(() => {
    getAllReviews().then(({ reviews }) => {
      if (category) {
        const filteredReviews = reviews.filter(
          (review) => review.category === category
        );
        setReviewsData(filteredReviews);
      } else {
        setReviewsData(reviews);
      }
    });
  },[category]);
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
};

export default ListReviews;
