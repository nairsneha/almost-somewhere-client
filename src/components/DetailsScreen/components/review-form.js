import { Rating } from 'react-simple-star-rating';
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { createReview } from '../../../actions/review-action';

const ReviewForm = () => {

    const [rating, setRating] = useState(0)

    const user = useSelector(({userStore}) => userStore)
    console.log(user)

    const placeId = useSelector(({placeDetail}) => placeDetail.placeId)
    console.log(placeId)

    const handleRating = (rate) => {
        setRating((rate/100) * 5)
    }

    const [newReview, setNewReview] = useState({review: ""});
    
    const dispatch = useDispatch();

    const createReviewHandler = (newReview) => {
        const review = {
            text: newReview,
            rating: rating,
            postedBy: {
                profilePhotoURL: user.profilePhotoURL,
                username: user.username
            },
            placeId: placeId
       }
       createReview(dispatch, review)
    }

    return(
    <> 
        <div>
            <div className="mb-3">
                <label htmlFor="review">Write a Review</label>
                <Rating onClick={(e) => handleRating(e)}
                                ratingValue={rating} />
                <textarea 
                onChange={(e) => setNewReview(e.target.value)}
                                className="form-control" id="review" rows="3" placeholder="Write a review"></textarea>
            </div>
            <div>
                <button 
                onClick={() => createReviewHandler(newReview)}
                className="btn btn-info mb-3">Publish Review</button>
            </div>
        </div>
        
    </>
    );
}

export default ReviewForm;