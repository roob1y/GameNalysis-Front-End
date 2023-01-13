import "boxicons";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { patchUserReview } from "../../../utils/api";

const VoteBtn = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Votes = ({ review_id, votes }) => {
  const [vote, setVote] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);

  const [err, setErr] = useState(null);
  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);

  let likeSelectedArrow = "regular";
  let dislikeSelectedArrow = "regular";

  if (likeActive) {
    likeSelectedArrow = "solid";
  }
  if (dislikeActive) {
    dislikeSelectedArrow = "solid";
  }

  const handleLikeClick = () => {
    if (likeActive) {
      setVote(-1);
      setDisplayCount(0);
      setLikeActive(false);
    } else {
      setVote(+1);
      setDisplayCount(+1);
      setLikeActive(true);
    }
    if (dislikeActive) {
      setVote(+2);
      setDisplayCount(+1);
      setDislikeActive(false);
    }
  };

  const handleDislikeClick = () => {
    if (dislikeActive) {
      setVote(1);
      setDisplayCount(0);
      setDislikeActive(false);
    } else {
      setVote(-1);
      setDisplayCount(-1);
      setDislikeActive(true);
    }
    if (likeActive) {
      setVote(-2);
      setDisplayCount(-1);
      setLikeActive(false);
    }
  };

  useEffect(() => {
    patchUserReview(review_id, vote).catch((err) => {
      setErr(err);
    });
  }, [review_id, vote]);

  if (err) return <p>{err.response.data.msg}. Please try again...</p>;

  return (
    <>
      <VoteBtn>
        <box-icon
          name="upvote"
          color="green"
          size="lg"
          type={likeSelectedArrow}
          onClick={handleLikeClick}
        />
      </VoteBtn>
      <p style={{color: "black", margin: "0"}} aria-label={`vote count ${votes}`}>{votes + displayCount}</p>
      <VoteBtn>
        <box-icon
          name="downvote"
          color="red"
          size="lg"
          type={dislikeSelectedArrow}
          onClick={handleDislikeClick}
        />
      </VoteBtn>
    </>
  );
};

export default Votes;
