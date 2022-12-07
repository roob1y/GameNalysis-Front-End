import CardReviews from "./CardReviews";
import CategoryList from "./CategoryList";
import SortByReviews from "./SortByReviews";

import { getAllReviews } from "../utils/api";
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const ListReviews = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [reviewsData, setReviewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();
  useEffect(() => {
    setIsLoading(true);
    getAllReviews(
      searchParams.get("sort_by"),
      searchParams.get("order"),
      // searchParams.get("category")
    ).then(({ reviews }) => {
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
  }, [searchParams, category]);

  // useEffect(() => {
  //   const currParams = Object.fromEntries([...searchParams]);
  //   setSearchParams(currParams);
  // }, [searchParams, setSearchParams])

  if (!isLoading) {
    return (
      <>
        <CategoryList />
        <SortByReviews
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <h2>Reviews</h2>
        <ul className="reviewList">
          {reviewsData.map((review) => (
            <CardReviews key={review.review_id} review={review} />
          ))}
        </ul>
      </>
    );
  } else {
    return <p>is loading...</p>;
  }
};

export default ListReviews;
