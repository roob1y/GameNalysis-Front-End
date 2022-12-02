import { Link, useParams } from "react-router-dom";
import { getUserReview } from "../utils/api";
import { useState, useEffect } from "react";
import { BsChevronLeft } from "react-icons/bs";

import UserCardReview from "./UserCardReview";
import ListComments from "./ListComments";
import AddComment from "./AddComment";

const UserReview = () => {
  const { reviewId } = useParams();
  const [userReview, setUserReview] = useState(null);
  const [newCommentData, setNewCommentData] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  const [idInc, setIdInc] = useState(0)
  
  useEffect(() => {
    setIsLoading(true);
    getUserReview(reviewId).then(({ review }) => {
      setUserReview(review);
      setIsLoading(false);
    });
  }, [reviewId]);

  const addCommentRender = (commentData) => {
    setIdInc(idInc + 1)
    setNewCommentData(commentData);
  }

  if (!isLoading) {
    return (
      <>
        <nav>
          <Link to="/">
            <BsChevronLeft title="Home Button" size="2em" />
          </Link>
        </nav>
        <main className="main">
          <section>
            <h2>Reviewed By {userReview.owner}</h2>
            <UserCardReview userReview={userReview} />
          </section>
            <h2>Comments</h2>
          <section>
            <AddComment reviewId={userReview.review_id} addCommentRender={addCommentRender} />
          </section>
          <section>
            <ListComments reviewId={userReview.review_id} newCommentData={newCommentData} idInc={idInc}/>
          </section>
        </main>
      </>
    );
  } else {
    return <p>is loading...</p>;
  }
};

export default UserReview;
