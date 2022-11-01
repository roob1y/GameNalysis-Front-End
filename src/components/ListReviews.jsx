import CardReviews from "./CardReviews";


const ListReviews = ({reviews}) => {
  return (
  <ul className="reviewList">
    {reviews.map((review) => <CardReviews key={review.review_id} review={review}/> )}
  </ul>
  )
}


export default ListReviews;