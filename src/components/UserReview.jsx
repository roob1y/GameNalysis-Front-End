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
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getUserReview(reviewId).then(({ review }) => {
      setUserReview(review);
      setIsLoading(false);
    });
  }, [reviewId]);

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
          <section>
            <h2>Comments</h2>
            <ListComments reviewId={userReview.review_id} />
          </section>
          <section>
            <AddComment reviewId={userReview.review_id}/>
          </section>
        </main>
      </>
    );
  } else {
    return <p>is loading...</p>;
  }
};

export default UserReview;
