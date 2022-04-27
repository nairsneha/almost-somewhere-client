import React from "react";
import profile from "./demoProfile.json";
import Profile from "./Profile";
import { useParams } from "react-router-dom";

// TODO: Replace demo profile data with actual user profile data

const ProfileScreen = () => {
  const { username } = useParams();

  // TODO: If `username` exists, get the user specified by this username, else render our own user
  return (
    <>
      <Profile profile={profile} />
    </>
  );
};

export default ProfileScreen;
