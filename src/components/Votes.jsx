import { AiFillUpSquare, AiFillDownSquare } from "react-icons/ai";
import { useState, useEffect } from "react";

const Votes = ({ review_id, votes }) => {
  const [vote, setVote] = useState(0);

  const [likeActive, setLikeActive] = useState(false)
  const [dislikeActive, setDislikeActive] = useState(false)

  const handleLikeChange = () => {
    // increase likes
    if (likeActive) {
      setLikeActive(false)
      setVote(vote - 1)
    } else {
      setLikeActive(true)
      setVote(vote + 1)
    } if (dislikeActive) {
      setDislikeActive(false)
      setVote(vote)
    }
    // Patch Request
  }
  const handleDislikeChange = () => {
    // increase likes
    if (dislikeActive) {
      setDislikeActive(false)
      setVote(vote + 1)
    } else {
      setDislikeActive(true)
      setVote(vote - 1)
    } if (likeActive) {
      setLikeActive(false)
      setVote(vote)
    }
    // Patch Request
  }
  return (
    <>
      <div className="">
        <h5 aria-label={`vote count ${votes}`}>votes: {votes + vote}</h5>
      </div>
      <div>
        <button onClick={handleLikeChange}>
          <AiFillUpSquare size="6em" color="green" />
        </button>
      </div>
      <div>
        <button onClick={handleDislikeChange}>
          <AiFillDownSquare size="6em" color="red"/>
        </button>
      </div>
    </>
  );
};

export default Votes;
