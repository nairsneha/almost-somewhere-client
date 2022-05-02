// import reviews from "../data/reviews.json"

import { FIND_REVIEWS_BY_PLACE, FIND_REVIEWS_BY_USER, 
    CREATE_REVIEW, DELETE_REVIEW, UPDATE_REVIEW } from "../actions/review-action";

const reviewsReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_REVIEW:
            return [action.newReview,
                    ...state]
        case DELETE_REVIEW:
            console.log(action.review._id)
            return state.filter(
                reviews => reviews._id !== action.review._id);
        // case UPDATE_REVIEW:
        //     return [action.updatedReview,
        //             ...state]
        case FIND_REVIEWS_BY_PLACE:
            console.log('hi',typeof action.reviews , action.reviews)
            return Object.values(action.reviews)
        case FIND_REVIEWS_BY_USER:
            return action.reviews
        default:
            return state;
    }
}

export default reviewsReducer;