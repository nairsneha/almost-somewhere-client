import React from "react";
import { Rating } from "react-simple-star-rating";

//TODO: modify the reaonly property if this is accessed by the logged in user.
// TODO: Make the review place clickable
const ProfileReviewListItem = ({ profileReview }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="row m-2">
            <div className="col-md-10">
              <div className="m-2">
                <h5>{profileReview.placeName}</h5>
              </div>
              <div>
                <Rating
                  readonly={true}
                  allowHover={false}
                  initialValue={0}
                  customIcons
                  ratingValue={(profileReview.rating / 5) * 100}
                />
              </div>
            </div>
          </div>
          <div className="row p-2 m-2">
            <div>
              <p>{profileReview.text}</p>
              <p>
                <a className="float-right btn text-white btn-info">
                  {" "}
                  <i className="fa fa-thumbs-up"></i> Useful
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileReviewListItem;
