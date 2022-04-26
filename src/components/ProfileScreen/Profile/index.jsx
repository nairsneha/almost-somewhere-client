import React from "react";
import { useState } from "react";
import FollowList from "../FollowList";
import "../profile-screen.css";

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
        <ul className="nav nav-tabs">
          <li className="nav-item" onClick={() => setCurrentTab(1)}>
            <a
              className={`nav-link ${currentTab === 1 ? "active" : ""}`}
              aria-current="page"
              href="#"
            >
              Reviews
            </a>
          </li>
          <li className="nav-item" onClick={() => setCurrentTab(2)}>
            <a
              className={`nav-link ${currentTab === 2 ? "active" : ""}`}
              href="#"
            >
              Followers
            </a>
          </li>
          <li className="nav-item" onClick={() => setCurrentTab(3)}>
            <a
              className={`nav-link ${currentTab === 3 ? "active" : ""}`}
              href="#"
            >
              Following
            </a>
          </li>
        </ul>
        {/* Set currenttab == 1 */}
        {currentTab === 2 && <FollowList usernameList={[1, 2, 3]} />}
        {currentTab === 3 && <FollowList usernameList={[1, 2, 3]} />}
      </div>
    </>
  );
};

export default Profile;
