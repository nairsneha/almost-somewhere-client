// import dummyReviews from "../data/profile-reviews.json";
import axios from 'axios';
import { REACT_APP_API_BASE } from "../config";

const GET_PLACE_REVIEWS_API = `${REACT_APP_API_BASE}/reviews/places`;
const GET_USER_REVIEWS_API = `${REACT_APP_API_BASE}/reviews`;
const ADD_REVIEW_API = `${REACT_APP_API_BASE}/reviews`;
const UPDATE_REVIEW_API = `${REACT_APP_API_BASE}/reviews/places`;
const DELETE_REVIEW_API = `${REACT_APP_API_BASE}/reviews/places`;

export const getReviewsByUser = async (username) => {
  const response = await axios.get(`${GET_USER_REVIEWS_API}/${username}`);
  return response.data.response;
};

export const getReviewsByPlace = async (placeId) => {
  const response = await axios.get(`${GET_PLACE_REVIEWS_API}/${placeId}`);
  return response.data.response;
};

export const createReview = async (review) => {
  const headers = {};
  const token = localStorage.getItem("allmostsomewhere-token");

  if (token) {
    headers["Authorization"] = token;
  }
  const response = await axios.post(`${ADD_REVIEW_API}`, review, { headers })
  return response.data;
 }

export const deleteReview = async (placeId, username) => {
  const response = await axios
    .delete(`${DELETE_REVIEW_API}/${placeId}/${username}`);
  return response.data;
 }

 export const updateReview = async (placeId, review) => {
  const response = await axios
      .put(`${UPDATE_REVIEW_API}/${placeId}`, review);
  return response.data;
  }