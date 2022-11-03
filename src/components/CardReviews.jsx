import { Link } from "react-router-dom";

const CardReviews = ({ review }) => {
  return (
    <li className="reviewCards grid">
      <div className="gridItem g1">
        <Link to={`/review/id${review.review_id}`}>
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
    </li>
  );
};

export default CardReviews;
