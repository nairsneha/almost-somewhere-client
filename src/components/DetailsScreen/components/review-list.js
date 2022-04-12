import React, {useState} from "react";

import ReviewItem from "./review-item"
import ReviewForm from "./review-form";

const ReviewCardList = () => {

    const [toggleForm, setToggleForm] = useState(false) // initial rating value

    const toggleReviewForm = () => {
        setToggleForm(!toggleForm)
      }

    return (
        <> 
            <div>
                <button onClick={toggleReviewForm} className="btn btn-info mb-3">Leave a Review</button>
            </div>
            {(toggleForm)? <div>
                <ReviewForm/>
            </div> : ""}
            <div>
                <ReviewItem/>
            </div>
        </>
); }

export default ReviewCardList;

