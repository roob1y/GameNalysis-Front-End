const CardReviews = ({review}) => {
  console.log(review);
  return (
    <li className="reviewCards">
      <h3>{review.title}</h3>
      <h4>Designed by {review.designer}</h4>
      <img className='gameImg' src={review.review_img_url} alt={review.title} />
      <h5>Review by: {review.owner}</h5>
      <h5>Upvotes: {review.votes}</h5>
      <h6>created: {review.created_at}</h6>
    </li>
  )
}

export default CardReviews;