import CardReviews from "./CardReviews";


const ListReviews = ({allReviews}) => {
  return (
    <ul className="reviewList">
      {allReviews.map((review) => (
        <CardReviews key={review.review_id} review={review} />
      ))}
    </ul>
  );
};

export default ListReviews;
