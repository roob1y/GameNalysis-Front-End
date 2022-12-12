import axios from "axios";

const ncgamesApi = axios.create({
  baseURL: "https://nc-reviews-games.cyclic.app/api",
});

export function getAllReviews(sort_by, order, category) {
  return ncgamesApi
    .get(`/reviews`, { params: { sort_by, order, category } })
    .then(({ data }) => {
      return data;
    });
}

export function getAllCategories() {
  return ncgamesApi.get(`/categories`).then(({ data }) => {
    return data;
  });
}

export function getUserReview(reviewId) {
  return ncgamesApi.get(`/reviews/${reviewId}`).then(({ data }) => {
    return data;
  });
}

export function patchUserReview(reviewId, voteCount) {
  return ncgamesApi.patch(`/reviews/${reviewId}`, { inc_votes: voteCount });
}

export function getCommentsByReviewId(reviewId, p, limit) {
  return ncgamesApi
  .get(`/reviews/${reviewId}/comments`, { params: { p, limit } })
  .then(({ data }) => {
    return data;
  });
}

export function postCommentByReviewId(reviewId, newComment) {
  return ncgamesApi.post(`/reviews/${reviewId}/comments`, newComment);
}

export function getUsers() {
  return ncgamesApi.get(`/users`).then(({ data }) => {
    return data;
  });
}

export function deleteCommentById(id) {
  return ncgamesApi.delete(`/comments/${id}`).then(({ data }) => {
    return data;
  });
}

export default ncgamesApi;
