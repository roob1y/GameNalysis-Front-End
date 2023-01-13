import { useParams } from "react-router-dom";
import { getUserReview } from "../../utils/api";
import { useState, useEffect } from "react";
import Votes from "./Votes";
import UserCardReview from "./UserCardReview";
import Comments from "../Comments";
import PageNotFound from "../Error/PageNotFound";
import styled from "styled-components";

const UserReview = () => {
  const { reviewId } = useParams();
  const [userReview, setUserReview] = useState(null);
  const [newCommentData, setNewCommentData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [idInc, setIdInc] = useState(0);
  const [headerImg, setHeaderImg] = useState("none");

  const HeaderImg = styled.div`
    margin: 0 auto;
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    max-width: 90vw;
    border: black 1px solid;
    height: 20em;
    background-size: cover;
    background-repeat: no-repeat;
  `;

  const UserReviewTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;
    color: white;
  `;

  const HeadingContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30%;
    color: white;
  `;

  const VotesContainer = styled.div`
    position: absolute;
    right: 5%;
    top: 10%;
    background-color: white;
  `;

  useEffect(() => {
    setErr(null);
    setIsLoading(true);
    getUserReview(reviewId)
      .then(({ review }) => {
        setHeaderImg(`url(${review.review_img_url})`);
        setUserReview(review);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err);
      });
  }, [reviewId]);

  const addCommentRender = (commentData) => {
    setIdInc(idInc + 1);
    setNewCommentData(commentData);
  };
  if (err) {
    return <PageNotFound status={err.response.status} />;
  }
  if (!isLoading) {
    return (
      <>
        <header>
          <HeaderImg
            style={{ backgroundImage: headerImg }}
            alt={userReview.title}
          >
            <UserReviewTitle>
              <h1 style={{ backgroundColor: "black", padding: "0 1em" }}>
                {userReview.title}
              </h1>
            </UserReviewTitle>
            <HeadingContent>
              <h2
                style={{
                  backgroundColor: "black",
                  margin: "0 10px",
                  padding: "0 1em",
                }}
              >
                Reviewed By {userReview.owner}
              </h2>
              <h2
                style={{
                  backgroundColor: "black",
                  margin: "0 10px",
                  padding: "0 1em",
                }}
              >
                Designed by {userReview.designer}
              </h2>
            <VotesContainer>
              <Votes
                review_id={userReview.review_id}
                votes={userReview.votes}
              />
            </VotesContainer>
            </HeadingContent>
          </HeaderImg>
        </header>
        <main className="main">
          <section>
            <UserCardReview userReview={userReview} />
          </section>
          <section className="comments">
            <h2>Comments</h2>
            <Comments
              userReview={userReview}
              addCommentRender={addCommentRender}
              newCommentData={newCommentData}
              idInc={idInc}
            />
          </section>
        </main>
      </>
    );
  } else {
    return <p>is loading...</p>;
  }
};

export default UserReview;
