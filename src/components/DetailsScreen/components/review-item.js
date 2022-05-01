import React from "react";
import { findImage } from "../../../actions/common-action";
import { Rating } from "react-simple-star-rating";
import "./review-item.css";

const ReviewItem = ({
  reviewItem = {
    authorName: "SANDEEP BASU",
    profilePhotoUrl:
      "https://lh3.googleusercontent.com/a-/AOh14GgYpi8WWJX--p7f_7wkq5Wa5GQYeogAOYVKSlk5pw=s128-c0x00000000-cc-rp-mo",
    rating: 4,
    text: "Huntington YMCA is a great place to do fitness activities. I recently joined a swimming class (beginner level) and loved it totally! Very clean swimming pool, great instructor, and staffs are friendly. I am going to enroll for another 8 weeks of swimming lessons in the new year (2022)!",
  },
}) => {
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
                <h6>{reviewItem.authorName}</h6>
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
