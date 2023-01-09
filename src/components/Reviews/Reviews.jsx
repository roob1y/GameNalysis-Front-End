import CardReviews from "./CardReviews";
import CategoryFilter from "../Filter";

import SortByOrder from "../SortByOrder/SortByOrder";

import { getAllReviews } from "../../utils/api";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PageNotFound from "../Error/PageNotFound";
import Pagination from "../Comments/Pagination/Pagination";
import styled from "styled-components";

const MainBody = styled.body``

const ReviewsContainer = styled.div`
`

const ReviewList = styled.ul`
  margin-top: 3vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

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

  const FilterAndSortBy = styled.section`
    display: flex;
  `;

  if (isLoading) {
    return (
      <MainBody>
        {err ? (
          <PageNotFound status={err.response.status} />
        ) : (
          <FilterAndSortBy>
            <CategoryFilter
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
            <SortByOrder
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
            <p>is loading...</p>
          </FilterAndSortBy>
        )}
      </MainBody>
    );
  } else {
    return (
      <>
        <FilterAndSortBy>
          <CategoryFilter
            setCurrentPage={setCurrentPage}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
          <SortByOrder
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
        </FilterAndSortBy>
        <ReviewsContainer>
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
        <a href="https://www.freepik.com/free-vector/diagonal-motion-lines-white-background_17564647.htm#query=gray%20background&position=29&from_view=keyword">Image by starline on Freepik</a>
        </ReviewsContainer>
      </>
    );
  }
};

export default Reviews;
