import reviews from "../data/reviews.json"

const reviewsReducer = (state = reviews, action) => {
    switch (action.type) {
    case 'create-review':
        const newReview = {
            _id: (new Date()).getTime() + '',
            authorName: action.authorName,
            // profilePhotoUrl: action.profilePhotoUrl,
            text: action.text,
            rating: action.rating,
        }
        return [
            newReview,
            ...state,
          ];
    default:
        return reviews;
    }
}

export default reviewsReducer;