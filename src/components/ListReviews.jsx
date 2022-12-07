import CardReviews from "./CardReviews";
import CategoryList from "./CategoryList";
import SortByReviews from "./SortByReviews";

import { getAllReviews } from "../utils/api";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const ListReviews = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [reviewsData, setReviewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getAllReviews(
      searchParams.get("sort_by"),
      searchParams.get("order"),
      searchParams.get("category")
    ).then(({ reviews }) => {
      setReviewsData(reviews);
      setIsLoading(false);
    });
  }, [searchParams]);

  if (isLoading) {
    return (
      <>
        <CategoryList
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <SortByReviews
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <p>is loading...</p>
      </>
    );
  } else {
    return (
      <>
        <CategoryList
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
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
  }
};

export default ListReviews;
