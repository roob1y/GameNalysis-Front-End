import styled from "styled-components";

const CardContainer = styled.article`

`;

const UserCardReview = ({ userReview }) => {
  return (
    <CardContainer className="">
      <div className="">
        <p>{userReview.review_body}</p>
      </div>
      <div className="">
        <h5>Comments: {userReview.comment_count}</h5>
      </div>
      <div className="">
        <h6>created: {new Date(userReview.created_at).toLocaleDateString()}</h6>
      </div>
    </CardContainer>
  );
};

export default UserCardReview;
