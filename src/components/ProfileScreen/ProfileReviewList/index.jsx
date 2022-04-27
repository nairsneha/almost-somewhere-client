import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getReviewsByUser } from "../../../services/review-service";
import ProfileReviewListItem from "./ProfileReviewListItem";

const ProfileReviewList = ({ username }) => {
  const [profileReviews, setProfileReviews] = useState([]);

  useEffect(() => {
    const getReviewsHandler = async () => {
      if (profileReviews.length === 0) {
        const reviews = await getReviewsByUser(username);
        setProfileReviews(reviews);
      }
    };
    getReviewsHandler();
  }, [username, profileReviews]);

  return (
    <>
      {profileReviews.map((profileReview, idx) => (
        <ProfileReviewListItem key={idx} profileReview={profileReview} />
      ))}
    </>
  );
};

export default ProfileReviewList;
