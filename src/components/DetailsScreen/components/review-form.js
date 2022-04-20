import { Rating } from 'react-simple-star-rating';
import React, {useState} from "react";
import {useDispatch} from "react-redux";

const ReviewForm = () => {

    const [rating, setRating] = useState(0)

    const handleRating = (rate) => {
        setRating((rate/100) * 5)
    }

    const [newReview, setNewReview] = useState({review: ""});
    const dispatch = useDispatch();

    // TODO add authorname and profile from current user
    const createReviewHandler = (newReview) => {

        dispatch({
            type: 'create-review',
            text: newReview,
            rating: rating,
            authorName: "Jane Doe",
       });
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