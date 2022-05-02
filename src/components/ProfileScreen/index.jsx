import React from "react";
import profile_d from "./demoProfile.json";
import Profile from "./Profile";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addUser } from "../../actions/known-users-action";
import { useDispatch } from "react-redux";

// TODO: Replace demo profile data with actual user profile data

const ProfileScreen = () => {
  const { username } = useParams();

  const [profile, setProfile] = useState();

  const knownUsers = useSelector((state) => state.knownUsers);
  const user = useSelector((state) => state.userStore);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserHandler = async () => {
      await addUser(dispatch, username);
    };

    if (username) {
      if (user?.username === username) {
        navigate("/profile");
      }
      if (!knownUsers.has(username)) {
        fetchUserHandler();
      }
      setProfile(knownUsers.get(username));
    } else {
      if (user) {
        setProfile(user);
      }
    }
  }, [username, dispatch, knownUsers, user, navigate]);

  return (
    <>
      {profile && <Profile profile={profile} isSelf={username === undefined} />}
    </>
  );
};

export default ProfileScreen;
