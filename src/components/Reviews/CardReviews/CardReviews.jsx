import { Link } from "react-router-dom";
import styled from "styled-components";

const ReviewCard = styled.li`
  margin: 10px 10px;
  width: 45%;
  height: auto;
  border: 5px solid #424242; 
  ;
  border-radius: 20px;
  background-image:linear-gradient(to bottom, #FFB74D, rgba(255,255,255,0));
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  padding: 20px;
  backdrop-filter: "blur(10px)"; 


  & h3,
  & h4,
  & h5,
  & h6 {
    color: black;
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
          <h4>Designed by {review.designer}</h4>
        </div>
        <div className="gridItem g3">
          <img
            className="gameImg"
            src={review.review_img_url}
            alt={review.title}
          />
        </div>
        <div className="gridItem g4">
          <h5 className="owner">Reviewed by: {review.owner}</h5>
        </div>
        <div className="gridItem g5">
          <h6>created: {new Date(review.created_at).toLocaleDateString()}</h6>
        </div>
        <div className="gridItem g6">
          <h5>Upvotes: {review.votes}</h5>
        </div>
      </ReviewCard>
    </>
  );
};

export default CardReviews;
