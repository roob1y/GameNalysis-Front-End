const UserCardReview = ({ userReview }) => {
  return (
    <article className="">
      <div className="">
        <h3>{userReview.title}</h3>
      </div>
      <div className="">
        <h3>Designed by {userReview.designer}</h3>
      </div>
      <div>
        <h4>Category: {userReview.category}</h4>
      </div>
      <div className="">
        <img
          className="gameImg"
          src={userReview.review_img_url}
          alt={userReview.title}
        />
      </div>
      <div className="">
        <p>{userReview.review_body}</p>
      </div>
      <div className="">
        <h5>Upvotes: {userReview.votes}</h5>
      </div>
      <div className="">
        <h5>Comments: {userReview.comment_count}</h5>
      </div>
      <div className="">
        <h6>created: {new Date(userReview.created_at).toLocaleDateString()}</h6>
      </div>
    </article>
  );
};

export default UserCardReview;
