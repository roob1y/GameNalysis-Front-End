import styled from "styled-components";

const ReviewBody = styled.div`text-align: left`;

const UserCardReview = ({ userReview }) => {
  return (
    <>
      <ReviewBody>
        <p>{userReview.review_body}</p>
      </ReviewBody>
    </>
  );
};

export default UserCardReview;
