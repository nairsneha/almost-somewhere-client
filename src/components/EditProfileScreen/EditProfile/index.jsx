import React, { useState } from "react";
import demoProfile from "../../ProfileScreen/demoProfile.json";

const EditProfile = () => {
  const [profile, setProfile] = useState(demoProfile);
  return (
    <>
      <div className="mt-2 position-relative">
        <img
          src={profile.bannerPicUrl}
          alt={profile.username}
          className="wd-profile-banner"
        />
        <div className="wd-profile-banner wd-edit-banner-pic-overlay position-absolute top-0 d-flex justify-content-center">
          <i class="fa-solid fa-camera fa-inverse fa-xl align-self-center wd-cursor-pointer"></i>
        </div>
      </div>
      <div className="px-3">
        <div className="d-flex justify-content-between">
          <div className="wd-profile-picture-container">
            <img
              src={profile.profilePicUrl}
              alt={profile.username}
              className="wd-profile-picture"
            />
            <div className="wd-profile-picture wd-edit-profile-pic-overlay d-flex justify-content-center">
              <i class="fa-solid fa-camera fa-inverse fa-xl align-self-center wd-cursor-pointer"></i>
            </div>
          </div>
          {/* TODO: Check if the user is current user; only then show this edit button */}
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
      </div>
    </>
  );
};

export default EditProfile;
