import * as service from "../services/review-service";

export const FIND_REVIEWS_BY_USER = "USER_REVIEW";
export const FIND_REVIEWS_BY_PLACE = "PLACE_REVIEW";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";

export const findReviewsByPlace = async (dispatch, placeId) => {
  const reviews = await service.getReviewsByPlace(placeId);
  dispatch({
    type: FIND_REVIEWS_BY_PLACE,
    reviews,
  });
};

export const findReviewsByUser = async (dispatch, username) => {
  const reviews = await service.getReviewsByUser(username);
  dispatch({
    type: FIND_REVIEWS_BY_USER,
    reviews,
  });
};

export const createReview = async (dispatch, review) => {
  const newReview = await service.createReview(review);
  console.log("new review");
  console.log(newReview);
  dispatch({
    type: CREATE_REVIEW,
    newReview,
  });
};

// export const updateReview = async (dispatch, placeId, review) => {
// const updatedReview = await service.createReview(placeId, review);
// dispatch({
//     type: UPDATE_REVIEW,
//     updatedReview
// });
// }

export const deleteReview = async (dispatch, placeId, username, review) => {
  const response = await service.deleteReview(placeId, username);
  dispatch({
    type: DELETE_REVIEW,
    review,
  });
};
