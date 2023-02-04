import { useParams } from "react-router-dom";
import { getUserReview } from "../../utils/api";
import { useState, useEffect } from "react";
import { theme } from "../../theme";
import Votes from "./Votes";
import UserCardReview from "./UserCardReview";
import Comments from "../Comments";
import PageNotFound from "../Error/PageNotFound";
import styled from "styled-components";
import "boxicons";

const HeaderImg = styled.div`
  margin: 0 auto;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  outline: ${({ theme }) => theme.primaryNeutral} 1px solid;
  height: 20em;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const UserReviewTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  color: black;
`;

const GameName = styled.h1`
  box-shadow: ${({ theme }) => theme.boxShadow};
  outline: ${({ theme }) => theme.outline};
  border-radius: 5px;
  padding: 0.5em;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-image: linear-gradient(
    to bottom left,
    #ffb74d 30%,
    rgba(255, 255, 255, 0.8) 100%
  );
`;

const HeadingContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
  color: white;

  h2 {
    font-size: 1em;
  }
`;

const VotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  right: 0;
  top: 0;
`;

const Review = styled.section`
  display: flex;
  gap: 10px;
`;

const UserReviewBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  outline: ${({ theme }) => theme.outline};
  padding: 0 1em;
  background-color: white;
`;

const CommentSection = styled.div`
  position: fixed;
  backdrop-filter: blur(10px);
  z-index: 999999;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: scroll;
  transition: transform 0.6s ease-in-out;
  transform: ${({ openComments }) =>
    openComments ? "translateY(0)" : "translateY(100%)"};
`;

const CommentsHeader = styled.div`
  z-index: 9999;
  background-color: teal;
  height: 7em;
  border-bottom: ${({ theme }) => theme.primaryNeutral} 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  h2 {
    margin: 0;
    font-size: 1.5em;
  }
`;

const BottomBar = styled.div`
  display: flex;

  h5 {
    margin: 0;
  }
`;

const CloseCommentsBtnContainer = styled.div`
  position: absolute;
  right: 5%;
`;

const UserReview = () => {
  const { reviewId } = useParams();
  const [userReview, setUserReview] = useState(null);
  const [newCommentData, setNewCommentData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [idInc, setIdInc] = useState(0);
  const [headerImg, setHeaderImg] = useState("none");
  const [openComments, setOpenComments] = useState(false);

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
              <GameName>{userReview.title}</GameName>
            </UserReviewTitle>
            <HeadingContent>
              <h2
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.75)",
                  margin: "0 10px",
                  padding: "0.5em 0.5em",
                }}
              >
                Reviewed By {userReview.owner}
              </h2>
              <h2
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.75)",
                  margin: "0 10px",
                  padding: "0.5em 0.5em",
                }}
              >
                Designed by {userReview.designer}
              </h2>
            </HeadingContent>
          </HeaderImg>
        </header>
        <main>
          <h2
            style={{
              width: "fit-content",
              height: "100%",
              margin: "0 auto",
              padding: "0.5em 1em",
              marginTop: "2em",
              marginBottom: "1em"

            }}
          >
            Review
          </h2>
          <Review>
            <UserReviewBody>
              <UserCardReview userReview={userReview} />
              <BottomBar>
                <div
                  onClick={() => setOpenComments(true)}
                  style={{
                    display: "flex",
                    gap: "5px",
                    marginBottom: "10px",
                    cursor: "pointer",
                    alignItems: "center",
                  }}
                >
                  <box-icon
                    type="solid"
                    color={theme.primaryPop}
                    name="comment"
                  />
                  <h5>{userReview.comment_count}</h5>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "100%",
                  }}
                >
                  <h6
                    style={{
                      margin: "10px 0px",
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    {new Date(userReview.created_at).toLocaleDateString()}
                  </h6>
                </div>
              </BottomBar>
            </UserReviewBody>
            <VotesContainer>
              <Votes
                review_id={userReview.review_id}
                votes={userReview.votes}
              />
            </VotesContainer>
          </Review>
          <CommentSection openComments={openComments}>
            <CommentsHeader>
              <h2>Comments</h2>
              <CloseCommentsBtnContainer>
                <box-icon
                  style={{ cursor: "pointer" }}
                  color="white"
                  size="lg"
                  onClick={() => setOpenComments(false)}
                  name="x"
                />
              </CloseCommentsBtnContainer>
            </CommentsHeader>
            <Comments
              userReview={userReview}
              addCommentRender={addCommentRender}
              newCommentData={newCommentData}
              idInc={idInc}
            />
          </CommentSection>
        </main>
      </>
    );
  } else {
    return <p>is loading...</p>;
  }
};

export default UserReview;
