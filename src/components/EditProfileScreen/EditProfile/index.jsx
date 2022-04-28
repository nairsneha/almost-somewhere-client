import React, { useState } from "react";
import demoProfile from "../../ProfileScreen/demoProfile.json";
import possiblePlaceTypes from "../../../data/all-place-types.json";
import "./edit-profile.css";

const EditProfile = () => {
  const [profile, setProfile] = useState(demoProfile);
  const [favourites, setFavourites] = useState(new Set(demoProfile.favorites));

  const onFirstnameChange = (event) => {
    setProfile((oldProfile) => {
      return {
        ...oldProfile,
        firstname: event.target.value,
      };
    });
  };

  const onLastnameChange = (event) => {
    setProfile((oldProfile) => {
      return {
        ...oldProfile,
        lastname: event.target.value,
      };
    });
  };

  const onAgeChange = (event) => {
    setProfile((oldProfile) => {
      return {
        ...oldProfile,
        age: event.target.value,
      };
    });
  };

  const preprocessPlaceName = (placeName) => {
    let newName = placeName.replace(/\_/gm, " ");
    return newName;
  };

  const onFavouritesChange = (favouriteChanged) => {
    setFavourites((oldFavourites) => {
      let fav = new Set(oldFavourites);
      if (fav.has(favouriteChanged)) {
        fav.delete(favouriteChanged);
      } else {
        fav.add(favouriteChanged);
      }
      return fav;
    });
  };

  //TODO: fix the e in input type = number bug

  return (
    <>
      <div className="mt-2 position-relative">
        <img
          src={profile.bannerPicUrl}
          alt={profile.username}
          className="wd-profile-banner"
        />
        <div className="wd-profile-banner wd-edit-banner-pic-overlay position-absolute top-0 d-flex justify-content-center">
          <i className="fa-solid fa-camera fa-inverse fa-xl align-self-center wd-cursor-pointer"></i>
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
              <i className="fa-solid fa-camera fa-inverse fa-xl align-self-center wd-cursor-pointer"></i>
            </div>
          </div>
          <div>
            <button className="btn btn-primary rounded-pill mt-2">
              Save Profile
            </button>
          </div>
        </div>
        <div className="mt-2">
          <div className="text-muted">@{profile.username}</div>
        </div>
        <div className="mt-2 d-flex gap-2">
          <div className="form-floating">
            <input
              type="text"
              className="form-control bg-light text-dark"
              id="wd-edit-profile-first-name"
              value={profile.firstname}
              onChange={onFirstnameChange}
            />
            <label htmlFor="wd-edit-profile-first-name ">First Name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control bg-light text-dark"
              id="wd-edit-profile-last-name"
              value={profile.lastname}
              onChange={onLastnameChange}
            />
            <label htmlFor="wd-edit-profile-last-name">Last Name</label>
          </div>
          <div className="form-floating">
            <input
              type="number"
              className="form-control bg-light text-dark"
              id="wd-edit-profile-age"
              value={profile.age}
              onChange={onAgeChange}
            />
            <label htmlFor="wd-edit-profile-age">Age</label>
          </div>
        </div>
        <div className="mt-2">
          <span className="fw-bold">Edit Favourites</span>
          <div className="mt-1 d-flex flex-wrap gap-3">
            {possiblePlaceTypes.map((place) => {
              return (
                <>
                  <div className="edit-profile-fav-check" key={place}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={place}
                        checked={favourites.has(place)}
                        id={`edit-profile-favourites-${place}`}
                        onChange={() => onFavouritesChange(place)}
                      />

                      <label
                        className="form-check-label"
                        htmlFor={`edit-profile-favourites-${place}`}
                      >
                        {preprocessPlaceName(place)}
                      </label>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
