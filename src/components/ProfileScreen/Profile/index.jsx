import React from "react";
import { useState } from "react";
import FollowList from "../FollowList";
import "../profile-screen.css";
import ProfileReviewList from "../ProfileReviewList";

const Profile = ({ profile }) => {
  const [currentTab, setCurrentTab] = useState(1);
  return (
    <>
      <img
        src={profile.bannerPicUrl}
        alt={profile.username}
        className="wd-profile-banner mt-1"
      />
      <div className="px-3">
        <div className="d-flex justify-content-between">
          <div className="wd-profile-picture-container">
            <img
              src={profile.profilePicUrl}
              alt={profile.username}
              className="wd-profile-picture"
            />
          </div>
          <div>
            <button className="btn btn-outline-dark rounded-pill mt-2">
              Edit Profile
            </button>
          </div>
        </div>
        <div className="mt-2">
          <h5 className="mb-0">
            {profile.firstname} {profile.lastname}
          </h5>
          <div className="text-muted">@{profile.username}</div>
        </div>
        <div className="mt-2">{profile.bio}</div>
        {profile.age && (
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
