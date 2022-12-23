import CardReviews from "./CardReviews";
import CategoryFilter from "../Filter";
import SortByReviews from "../SortByOrder";

import { getAllReviews } from "../../utils/api";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PageNotFound from "../Error/PageNotFound";
import Pagination from "../Comments/Pagination/Pagination";

const Reviews = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [reviewsData, setReviewsData] = useState([]);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewCount, setReviewCount] = useState(null);

  let limit = 10;

  useEffect(() => {
    setIsLoading(true);
    setErr(null);
    getAllReviews(
      searchParams.get("sort_by"),
      searchParams.get("order"),
      searchParams.get("category"),
      currentPage,
      limit
    )
      .then(({ reviews }) => {
        setReviewCount(reviews[0].review_count);
        setReviewsData(reviews);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err);
      });
  }, [searchParams, currentPage, limit]);

  if (isLoading) {
    return (
      <>
        {err ? (
          <PageNotFound status={err.response.status} />
        ) : (
          <>
            <CategoryFilter
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
            <SortByReviews
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
            <p>is loading...</p>
          </>
        )}
      </>
    );
  } else {
    return (
      <>
        <CategoryFilter
          setCurrentPage={setCurrentPage}
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
        <Pagination
          onPageChange={(page) => setCurrentPage(page)}
          totalCount={reviewCount}
          currentPage={currentPage}
          pageSize={limit}
        />
      </>
    );
  }
};

export default Reviews;
