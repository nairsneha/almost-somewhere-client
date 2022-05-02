import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import "./review-list-item.css";

//TODO: modify the reaonly property if this is accessed by the logged in user.
// TODO: Make the review place clickable
const ProfileReviewListItem = ({ profileReview }) => {
  return (
    <>
      <div className="card">
        <div className="card-body gap-2">
          <div className="row">
            <div className="d-flex justify-content-between">
              <div className="">
                <h5>
                  <Link
                    className="place-link"
                    to={`/detail/${profileReview.placeId}`}
                  >
                    {profileReview.placeName
                      ? profileReview.placeName
                      : profileReview.placeId}
                  </Link>
                </h5>
              </div>
              <div>
                <Rating
                  readonly={true}
                  allowHover={false}
                  initialValue={0}
                  customIcons
                  ratingValue={(profileReview.rating / 5) * 100}
                  size={30}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div>{profileReview.text}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileReviewListItem;
