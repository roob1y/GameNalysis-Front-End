import styled from "styled-components";

const ReviewBody = styled.div`text-align: left`;

const UserCardReview = ({ userReview }) => {
  return (
    <>
      <ReviewBody>
        <p>{userReview.review_body}</p>
      </ReviewBody>
      <div>
        <h6 style={{margin: "0px", marginBottom: "1em", float: "right"}}>created: {new Date(userReview.created_at).toLocaleDateString()}</h6>
      </div>
    </>
  );
};

export default UserCardReview;
