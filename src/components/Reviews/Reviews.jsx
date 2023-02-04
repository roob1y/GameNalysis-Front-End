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
  margin: 0;
  margin-top: 1.5em;
`;

const ReviewList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex: 1 100%;
  justify-content: center;
`;

const ReviewListItem = styled.li`
  flex-basis: 33%;

  @media (max-width: 1300px) {
    flex-basis: 50%;
  }
  @media (max-width: 856px) {
    flex-basis: 100%;
  }
`;

const FilterAndSortBy = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  margin-top: 30px;
`;

const Reviews = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [reviewsData, setReviewsData] = useState([]);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewCount, setReviewCount] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All Reviews");
  const [isHidden, setIsHidden] = useState(false);

  let limit = 9;

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
        <main>
          <FilterAndSortBy>
            <CategoryFilter
              setCurrentPage={setCurrentPage}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              setOutputStr={setSelectedCategory}
              setIsHidden={setIsHidden}
            />
              <SortByOrder
                isHidden={isHidden}
                searchParams={searchParams}
                setSearchParams={setSearchParams}
              />
          </FilterAndSortBy>
          <ReviewList>
            {reviewsData.map((review) => (
              <ReviewListItem key={review.review_id}>
                <CardReviews key={review.review_id} review={review} />
              </ReviewListItem>
            ))}
          </ReviewList>
          <Pagination
            onPageChange={(page) => setCurrentPage(page)}
            totalCount={reviewCount}
            currentPage={currentPage}
            pageSize={limit}
          />
        </main>
      </>
    );
  }
};

export default Reviews;
