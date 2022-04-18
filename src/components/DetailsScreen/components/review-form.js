import { Rating } from 'react-simple-star-rating';
import React, {useState} from "react";
// import {useDispatch} from "react-redux";

const ReviewForm = () => {

    const [rating, setRating] = useState(0)

    const handleRating = (rate) => {
        setRating(rate)
        console.log(rate)
    }

    // const [newReview, setNewReview] = useState({review: ""});
    // const dispatch = useDispatch();

    return(
    <> 
        <div>
            <div className="mb-3">
                <label htmlFor="review">Write a Review</label>
                <Rating onClick={(e) => handleRating(e)}
                                ratingValue={rating} />
                <textarea 
                // onChange={(e) =>
                //                 setNewReview({...newReview,
                //                 review: e.target.value})}
                                className="form-control" id="review" rows="3" placeholder="Write a review"></textarea>
            </div>
            <div>
                <button 
                // onClick={() => createReview(dispatch, newReview)}
                className="btn btn-info mb-3">Publish Review</button>
            </div>
        </div>
        
    </>
    );
}

export default ReviewForm;