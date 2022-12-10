import { AiFillUpSquare, AiFillDownSquare } from "react-icons/ai";
import { useEffect, useState } from "react";

import { patchUserReview } from "../../../utils/api";

const Votes = ({ review_id, votes }) => {
  const [vote, setVote] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);

  const [err, setErr] = useState(null);

  const [likeActive, setLikeActive] = useState(false);

  const [dislikeActive, setDislikeActive] = useState(false);

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
  let upvoteClassName = "upvote";
  if (likeActive) {
    upvoteClassName += " upvoteEnable";
  }

  let downvoteClassName = "downvote";
  if (dislikeActive) {
    downvoteClassName += " downvoteEnable";
  }

  useEffect(() => {
    patchUserReview(review_id, vote).catch((err) => {
      setErr(err)
    });
  }, [review_id, vote]);
  
  if (err) return <p>{err.response.data.msg}. Please try again...</p>;

  return (
    <>
      <div className="">
        <h5 aria-label={`vote count ${votes}`}>
          votes: {votes + displayCount}
        </h5>
      </div>
      <div>
        <button onClick={handleLikeClick}>
          <AiFillUpSquare className={upvoteClassName} />
        </button>
      </div>
      <div>
        <button onClick={handleDislikeClick}>
          <AiFillDownSquare className={downvoteClassName} />
        </button>
      </div>
    </>
  );
};

export default Votes;
