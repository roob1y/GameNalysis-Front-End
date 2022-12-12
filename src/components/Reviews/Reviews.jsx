import CardReviews from "./CardReviews";
import CategoryList from "../Filter";
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

  let PageSize = 10;
  let reviewCount = 5;

  useEffect(() => {
    setIsLoading(true);
    setErr(null);
    getAllReviews(
      searchParams.get("sort_by"),
      searchParams.get("order"),
      searchParams.get("category")
    )
      .then(({ reviews }) => {
        setReviewsData(reviews);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err);
      });
  }, [searchParams]);

  if (isLoading) {
    return (
      <>
        {err ? (
          <PageNotFound status={err.response.status} />
        ) : (
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
        )}
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
        <Pagination onPageChange={page => setCurrentPage(page)} totalCount={reviewCount} currentPage={currentPage} pageSize={PageSize}/>
      </>
    );
  }
};

export default Reviews;
