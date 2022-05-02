import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReviewItem from "./review-item";
import ReviewForm from "./review-form";
import { findReviewsByPlace } from "../../../actions/review-action";

const ReviewCardList = ({ placeDetail = { reviews: [] } }) => {
  const placeId = useSelector(({ placeDetail }) => placeDetail.placeId);

  const dispatch = useDispatch();
  const findPlaceReviews = () => {
    findReviewsByPlace(dispatch, placeId);
  };
  useEffect(() => findPlaceReviews(), [placeId]);

  const ourReviews = useSelector(({ ourReviews }) => ourReviews);

  const reviews = placeDetail.reviews;

  const [toggleForm, setToggleForm] = useState(false); // initial rating value

  const toggleReviewForm = () => {
    setToggleForm(!toggleForm);
  };

  return (
    <>
      <div className="mt-4">
        <button onClick={toggleReviewForm} className="btn btn-info mb-3">
          Leave a Review
        </button>
      </div>
      {toggleForm ? (
        <div>
          <ReviewForm />
        </div>
      ) : (
        ""
      )}
      <div>
        {ourReviews &&
          ourReviews?.map((review) => {
            review._id = new Date().getTime() + Math.random() + "";
            return <ReviewItem key={review._id} reviewItem={review} />;
          })}
        {reviews &&
          reviews.map((review) => {
            review._id = new Date().getTime() + Math.random() + "";
            return <ReviewItem key={review._id} reviewItem={review} />;
          })}
      </div>
    </>
  );
};

export default ReviewCardList;
