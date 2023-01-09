import { Link } from "react-router-dom";
import styled from "styled-components";

const ReviewCard = styled.li`
  margin: 10px 10px;
  width: 45%;
  height: auto;
  outline: 5px solid #42424250;
  border-radius: 20px;
  background: linear-gradient(
    0deg,
    hsla(0, 0%, 100%, 1) 0%,
    hsla(36, 100%, 65%, 1) 43%
  );
  background-image: linear-gradient(
    to bottom left,
    #ffb74d 70%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: 0 0 12px rgba(0, 0, 0, 1);
  padding: 20px;
  backdrop-filter: "blur(10px)";

  h3 {
    font-size: 1.5em;
  }

  & h3,
  & h4,
  & h5 {
    color: ${({theme}) => theme.textDark};
  }
`;

const CardReviews = ({ review }) => {
  return (
    <>
      <ReviewCard className="reviewCards grid">
        <div className="gridItem g1">
          <Link to={`/review/${review.review_id}`}>
            <h3>{review.title}</h3>
          </Link>
        </div>
        <div className="gridItem g2">
          <h4 className="owner">Reviewed by: {review.owner}</h4>
        </div>
        <div className="gridItem g3">
          <img
            className="gameImg"
            src={review.review_img_url}
            alt={review.title}
          />
        </div>
        <div className="gridItem g4">
          <h4>Designed by {review.designer}</h4>
        </div>
        <div className="gridItem g5">
          <h5>created: {new Date(review.created_at).toLocaleDateString()}</h5>
        </div>
        <div className="gridItem g6">
          <h5>Upvotes: {review.votes}</h5>
        </div>
      </ReviewCard>
    </>
  );
};

export default CardReviews;
