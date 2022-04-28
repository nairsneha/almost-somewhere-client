import React from "react";
import profile_d from "./demoProfile.json";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addUser } from "../../actions/known-users-action";
import { useDispatch } from "react-redux";

// TODO: Replace demo profile data with actual user profile data

const ProfileScreen = () => {
  const { username } = useParams();

  const [profile, setProfile] = useState();

  const knownUsers = useSelector((state) => state.knownUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserHandler = async () => {
      await addUser(dispatch, username);
    };

    if (username) {
      // TODO: if username is same as the logged in user's username, redirect to /profile instead.

      if (!knownUsers.has(username)) {
        fetchUserHandler();
      }
      setProfile(knownUsers.get(username));
      // TODO: fetch this user from the API
    } else {
      // TODO: Replace profile_d with the logged in user
      setProfile(profile_d);
    }
  }, [username, dispatch, knownUsers]);

  return (
    <>
      {profile && <Profile profile={profile} isSelf={username === undefined} />}
    </>
  );
};

export default ProfileScreen;
