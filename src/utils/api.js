import axios from "axios";

const ncgamesApi = axios.create({
  baseURL: "https://nc-reviews-games.cyclic.app/api",
});

export function getAllReviews(sort_by, order, category) {
  return ncgamesApi.get(`/reviews`, {params: {sort_by, order, category}}).then((res) => {
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
  return ncgamesApi.get(`/reviews/${reviewId}/comments`).then(({ data }) => {
    return data;
  });
}

export function postCommentByReviewId(reviewId, newComment) {
  console.log('reviewId: ', reviewId);
  return ncgamesApi.post(`/reviews/${reviewId}/comments`, newComment)
}

export default ncgamesApi;
