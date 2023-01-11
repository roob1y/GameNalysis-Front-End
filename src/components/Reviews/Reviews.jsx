import CardReviews from "./CardReviews";
import CategoryFilter from "../Filter";

import SortByOrder from "../SortByOrder/SortByOrder";

import { getAllReviews } from "../../utils/api";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PageNotFound from "../Error/PageNotFound";
import Pagination from "../Comments/Pagination/Pagination";
import styled from "styled-components";

const CategoryTitle = styled.h1`
  font-size: 3em;
  font-weight: 200;
  margin: 1.5em 0;
`

const ReviewsContainer = styled.div`
`;

const ReviewList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0.5em 0;

`;

const FilterAndSortBy = styled.section`
  display: flex;
  width: fit-content;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  left: 7em;
`;

const Reviews = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [reviewsData, setReviewsData] = useState([]);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewCount, setReviewCount] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All Reviews");
  const [sortByDisplay, setSortByDisplay] = useState(true);

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
            <p>is loading...</p>
          </>
        )}
      </>
    );
  } else {
    return (
      <>
        <CategoryTitle>{selectedCategory}</CategoryTitle>
        <ReviewsContainer>
          <FilterAndSortBy>
            <CategoryFilter
              setCurrentPage={setCurrentPage}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              setOutputStr={setSelectedCategory}
              setSortByDisplay={setSortByDisplay}
            />
            {sortByDisplay ? (
              <SortByOrder
                searchParams={searchParams}
                setSearchParams={setSearchParams}
              />
            ) : null}
          </FilterAndSortBy>
          <ReviewList className="reviewList">
            {reviewsData.map((review) => (
              <CardReviews key={review.review_id} review={review} />
            ))}
          </ReviewList>

          <Pagination
            onPageChange={(page) => setCurrentPage(page)}
            totalCount={reviewCount}
            currentPage={currentPage}
            pageSize={limit}
          />
        </ReviewsContainer>
      </>
    );
  }
};

export default Reviews;
