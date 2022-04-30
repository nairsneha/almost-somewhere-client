import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import demoProfile from "../../ProfileScreen/demoProfile.json";
import possiblePlaceTypes from "../../../data/all-place-types.json";
import "./edit-profile.css";

const EditProfile = () => {
  const [profile, setProfile] = useState(demoProfile);
  const [favourites, setFavourites] = useState(new Set(demoProfile.favorites));
  const profilePicEditBox = useRef();
  const bannerPicEditBox = useRef();
  const navigate = useNavigate();

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

  const profilePicOnSave = () => {
    if (profilePicEditBox.current.value) {
      setProfile((oldProfile) => {
        return {
          ...oldProfile,
          profilePicUrl: profilePicEditBox.current.value,
        };
      });
    }
  };

  const bannerPicOnSave = () => {
    if (bannerPicEditBox.current.value) {
      setProfile((oldProfile) => {
        return {
          ...oldProfile,
          bannerPicUrl: bannerPicEditBox.current.value,
        };
      });
    }
  };

  const onSaveClick = () => {
    setProfile((oldProfile) => {
      return {
        ...oldProfile,
        favorites: [...favourites],
      };
    });
    //TODO: Call API to save this user.
    navigate(-1);
  };

  const preprocessPlaceName = (placeName) => {
    let newName = placeName.replace(/\_/gm, " ");
    return newName;
  };

  return (
    <>
      <div className="mt-2 position-relative">
        <img
          src={profile.bannerPicUrl}
          alt={profile.username}
          className="wd-profile-banner"
        />
        <div
          className="wd-profile-banner wd-edit-banner-pic-overlay position-absolute top-0 d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#banner-pic-edit-modal"
        >
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
            <div
              className="wd-profile-picture wd-edit-profile-pic-overlay d-flex justify-content-center"
              data-bs-toggle="modal"
              data-bs-target="#profile-pic-edit-modal"
            >
              <i className="fa-solid fa-camera fa-inverse fa-xl align-self-center wd-cursor-pointer"></i>
            </div>
          </div>
          <div>
            <button
              className="btn btn-primary rounded-pill mt-2"
              onClick={onSaveClick}
            >
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
      <div
        className="modal fade"
        id="profile-pic-edit-modal"
        tabindex="-1"
        aria-labelledby="profle-pic-edit-modal-label"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="profle-pic-edit-modal-label">
                Edit Profile Picture URL
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control bg-light text-dark"
                  id="wd-edit-profile-profile-pic"
                  placeholder={profile.profilePicUrl}
                  ref={profilePicEditBox}
                />
                <label htmlFor="wd-edit-profile-profile-pic">
                  Profile Picture
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={profilePicOnSave}
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="banner-pic-edit-modal"
        tabindex="-1"
        aria-labelledby="banner-pic-edit-modal-label"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="banner-pic-edit-modal-label">
                Edit Banner Picture URL
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control bg-light text-dark"
                  id="wd-edit-profile-banner"
                  ref={bannerPicEditBox}
                  placeholder={profile.bannerPicUrl}
                />
                <label htmlFor="wd-edit-profile-banner">Banner Picture</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={bannerPicOnSave}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
