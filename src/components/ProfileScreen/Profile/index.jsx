import React from "react";
import FollowList from "../FollowList";
import "../profile-screen.css";

const Profile = ({ profile }) => {
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

        <div className="d-flex gap-4 mt-2">
          {/* TODO: Make this a link */}
          <div>
            <span className="fw-bold">{profile.following.length}</span>{" "}
            <span className="text-muted">Following</span>
          </div>
          {/* TODO: Make this a link */}
          <div>
            <span className="fw-bold">{profile.followers.length}</span>{" "}
            <span className="text-muted">Followers</span>
          </div>
        </div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Reviews
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Followers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Following
            </a>
          </li>
        </ul>
        <FollowList usernameList={[1, 2]} />
      </div>
    </>
  );
};

export default Profile;
