import axios from "axios";


const ncgamesApi = axios.create({
  baseURL:"https://lord-of-board-games.herokuapp.com/api/"
})

export function getAllReviews () {
  return ncgamesApi.get(`/reviews`).then((res) => {
    return res.data;
  })
}

export function getCategories () {
  return ncgamesApi.get(`/categories`).then((res) => {
    return res.data;
  })
}


export default ncgamesApi;