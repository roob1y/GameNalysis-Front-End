import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";

const ReviewCard = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  margin: 10px 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 1fr 4fr 2fr;
  outline: ${({ theme }) => theme.outline};
  border-radius: 20px;
  background-image: linear-gradient(
    to bottom left,
    #ffb74d 1%,
    rgba(255, 255, 255, 0.01) 100%
  );
  box-shadow: ${({ theme }) => theme.boxShadow};
  :hover {
    box-shadow: 0 0 12px 7px ${({ theme }) => theme.primaryHover};
  }

  h3 {
    font-size: 1.5em;
  }

  & h3,
  & h4,
  & h5 {
    color: ${({ theme }) => theme.textDark};
    margin: 0;
    padding: 1em;
    padding-bottom: 0;
  }
`;

const GameImg = styled.div`
  background: url(${({ review }) => review.review_img_url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 75%;
  height: 15em;
  margin: 0 auto;
  box-shadow: 0 10px 30px 0 gray;
`;

const linkStyle = {
  margin: "0.5em",
  textDecoration: "none",
  color: "blue",
  display: "flex",
  flexWrap: "wrap",
  flex: "0 0 30%",
};

const CardReviews = ({ review }) => {
  return (
    <Link style={linkStyle} to={`/review/${review.review_id}`}>
      <ReviewCard className="reviewCards grid">
        <div className="gridItem g1">
          <h3>{review.title}</h3>
        </div>
        <div className="gridItem g2">
          <h4 className="owner">Reviewed by: {review.owner}</h4>
        </div>
        <div className="gridItem g3">
          <GameImg className="gameImg" review={review} alt={review.title} />
        </div>
        <div className="gridItem g4" style={{ marginTop: "1em" }}>
          <FontAwesomeIcon
            style={{ color: "black" }}
            size={"lg"}
            icon={faComment}
          />
          <h5>{review.comment_count}</h5>
        </div>
        <div className="gridItem g5" style={{ marginTop: "1em" }}>
          <FontAwesomeIcon
            style={{ color: "black" }}
            size="lg"
            icon={faHeart}
          />
          <h5>{review.votes}</h5>
        </div>
      </ReviewCard>
    </Link>
  );
};

export default CardReviews;
