import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./edit-profile.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../actions/user-details-actions";

const EditProfile = () => {
  const user = useSelector((state) => state.userStore);
  const dispatch = useDispatch();
  const [profile, setProfile] = useState(user);
  const profilePicEditBox = useRef();
  const bannerPicEditBox = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setProfile(user);
    }
  }, [user]);

  const selectMultipleValuesFromFavourites = (event) => {
    let values = [];
    Array.from(event.target.selectedOptions, (option) =>
      values.push(option.value)
    );
    setProfile((oldProfile) => ({ ...oldProfile, favorites: values }));
  };

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

  const profilePicOnSave = () => {
    if (profilePicEditBox.current.value) {
      setProfile((oldProfile) => {
        return {
          ...oldProfile,
          profilePhotoURL: profilePicEditBox.current.value,
        };
      });
    }
  };

  const bannerPicOnSave = () => {
    if (bannerPicEditBox.current.value) {
      setProfile((oldProfile) => {
        return {
          ...oldProfile,
          bannerPhotoURL: bannerPicEditBox.current.value,
        };
      });
    }
  };

  const onSaveClick = () => {
    if (user !== profile) {
      updateUser(dispatch, profile);
    }
    navigate(-1);
  };

  return (
    <>
      <div className="mt-2 position-relative">
        <img
          src={
            profile.bannerPhotoURL ||
            "https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg"
          }
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
              src={
                profile.profilePhotoURL ||
                "https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg"
              }
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
          <div className="form-group">
            <label htmlFor="favourites" className="fw-bold">
              Edit Favourites
            </label>
            <select
              multiple
              className="form-control"
              id="favourites"
              name="favourites"
              onChange={(e) => selectMultipleValuesFromFavourites(e)}
            >
              <option value="library">library</option>
              <option value="atm">atm</option>
              <option value="lodging">lodging</option>
              <option value="bank">bank</option>
              <option value="movie_theater">movie theater</option>
              <option value="police">police</option>
              <option value="restaurant">restaurant</option>
              <option value="store">store</option>
              <option value="subway_station">subway station</option>
              <option value="hospital">hospital</option>
              <option value="laundry">laundry</option>
              <option value="university">university</option>
              <option value="supermarket">supermarket</option>
              <option value="gym">gym</option>
            </select>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="profile-pic-edit-modal"
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
                  placeholder={profile.profilePhotoURL}
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
                  placeholder={profile.bannerPhotoURL}
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
