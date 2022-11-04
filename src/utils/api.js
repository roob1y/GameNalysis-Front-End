import axios from "axios";

const ncgamesApi = axios.create({
  baseURL: "https://lord-of-board-games.herokuapp.com/api/",
});

export function getAllReviews() {
  return ncgamesApi.get(`/reviews`).then((res) => {
    return res.data;
  });
}

export function getAllCategories() {
  return ncgamesApi.get(`/categories`).then((res) => {
    return res.data;
  });
}

export function getUserReview(reviewId) {
  return ncgamesApi.get(`/reviews/${reviewId}`).then((res) => {
    return res.data;
  });
}

export function patchUserReview(reviewId, voteCount) {
  return ncgamesApi.patch(`/reviews/${reviewId}`, { inc_votes: voteCount });
}

export function getCommentsByReviewId(reviewId) {
  return ncgamesApi.get(`reviews/${reviewId}/comments`).then(({ data }) => {
    return data;
  });
}

export default ncgamesApi;
