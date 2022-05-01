import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FollowList from "../FollowList";
import "../profile-screen.css";
import ProfileReviewList from "../ProfileReviewList";

const Profile = ({ profile, isSelf }) => {
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <>
      <img
        src={
          profile.bannerPicUrl ||
          "https://pbs.twimg.com/media/D-jnKUPU4AE3hVR.jpg"
        }
        alt={profile.username}
        className="wd-profile-banner mt-1"
      />
      <div className="px-3">
        <div className="d-flex justify-content-between">
          <div className="wd-profile-picture-container">
            <img
              src={
                profile.profilePicUrl ||
                "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/13/1490989105-twitter1.jpg?resize=480:*"
              }
              alt={profile.username}
              className="wd-profile-picture"
            />
          </div>
          {isSelf && (
            <div>
              <Link to="/profile/edit">
                <button className="btn btn-outline-dark rounded-pill mt-2">
                  Edit Profile
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="mt-2">
          <h5 className="mb-0">
            {profile.firstname} {profile.lastname}
          </h5>
          <div className="text-muted">@{profile.username}</div>
        </div>
        <div className="mt-2">{profile.bio}</div>
        {isSelf && (
          <div className="mt-2 d-flex gap-4">
            <div className="text-muted d-flex gap-1 ">
              <i className="fa-solid fa-lg fa-cake-candles align-self-center"></i>
              <span className="align-self-center">Age {profile.age}</span>
            </div>
          </div>
        )}
        <ul className="nav nav-tabs mt-2">
          <li className="nav-item" onClick={() => setCurrentTab(1)}>
            <span
              className={`nav-link ${currentTab === 1 ? "active" : ""}`}
              aria-current="page"
              href="#"
            >
              Reviews
            </span>
          </li>
          <li className="nav-item" onClick={() => setCurrentTab(2)}>
            <span
              className={`nav-link ${currentTab === 2 ? "active" : ""}`}
              href="#"
            >
              Followers
            </span>
          </li>
          <li className="nav-item" onClick={() => setCurrentTab(3)}>
            <span
              className={`nav-link ${currentTab === 3 ? "active" : ""}`}
              href="#"
            >
              Following
            </span>
          </li>
        </ul>
        {currentTab === 1 && <ProfileReviewList username={profile.username} />}
        {currentTab === 2 && <FollowList usernameList={[1, 2, 3]} />}
        {currentTab === 3 && <FollowList usernameList={[1, 2, 3]} />}
      </div>
    </>
  );
};

export default Profile;