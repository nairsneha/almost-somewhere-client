import React from "react";
import { findImage } from "../../../actions/common-action";
import { Rating } from "react-simple-star-rating";
import "./review-item.css";
import {useDispatch, useSelector} from "react-redux";
import { deleteReview } from "../../../actions/review-action";



const ReviewItem = ({
  reviewItem = {
    authorName: "SANDEEP BASU",
    profilePhotoUrl:
      "https://lh3.googleusercontent.com/a-/AOh14GgYpi8WWJX--p7f_7wkq5Wa5GQYeogAOYVKSlk5pw=s128-c0x00000000-cc-rp-mo",
    rating: 4,
    text: "Huntington YMCA is a great place to do fitness activities. I recently joined a swimming class (beginner level) and loved it totally! Very clean swimming pool, great instructor, and staffs are friendly. I am going to enroll for another 8 weeks of swimming lessons in the new year (2022)!",
  },
}) => {
  
  const user = useSelector(({userStore}) => userStore)

  console.log(user.username)

  const placeId = useSelector(({placeDetail}) => placeDetail.placeId)

  const dispatch = useDispatch();
  const deleteReviewHandler = (review) => {
      console.log(review.id)
      deleteReview(dispatch, user.username, placeId, review)
    }

  return (
    <>
      <div className="card">
        <div className="card-body d-flex flex-column gap-2">
          <div className="d-flex gap-4">
            <div className="d-flex align-items-center">
              <img
                src={
                  reviewItem.profilePhotoUrl
                    ? findImage(reviewItem.profilePhotoUrl)
                    : "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
                }
                alt={reviewItem.authorName}
                className="img rounded-circle img-fluid review-profile-avatar"
              />
            </div>
            <div className="d-flex align-self-center align-items-start flex-column">
              <div className="mx-1">
                {console.log(user.username)}
                {
                  (reviewItem.postedBy && 
                  (user.username === reviewItem.postedBy['username']) || user.role == MOD || user.role == ADMIN) 
                  ? <span className="float-end" onClick={() => deleteReviewHandler(reviewItem)}><i class="fas fa-times"></i></span> 
                  : <></>
                }
                <h6>{reviewItem.authorName || reviewItem.postedBy['username']}</h6>
              </div>
              <div>
                <Rating
                  readonly={true}
                  allowHover={false}
                  initialValue={0}
                  ratingValue={
                    (reviewItem.rating / 5) * 100
                  } /* Available Props */
                  size="30"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <p>{reviewItem.text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewItem;
