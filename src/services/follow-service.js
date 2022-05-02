import axios from "axios";
import { REACT_APP_API_BASE } from "../config";

export const followUser = async (username) => {
  const baseUrl = `${REACT_APP_API_BASE}/follow`;

  const headers = {};
  const token = localStorage.getItem("allmostsomewhere-token");

  if (token) {
    headers["Authorization"] = token;
  }

  let data = {
    username,
  };

  const response = await axios.put(baseUrl, data, { headers });

  if (response?.data?.isOk) {
    return response?.data?.response;
  }

  return null;
};

export const unfollowUser = async (username) => {
  const baseUrl = `${REACT_APP_API_BASE}/unfollow`;

  const headers = {};
  const token = localStorage.getItem("allmostsomewhere-token");

  if (token) {
    headers["Authorization"] = token;
  }

  let data = {
    username,
  };

  const response = await axios.delete(baseUrl, { headers, data });

  if (response?.data?.isOk) {
    return response?.data?.response;
  }

  return null;
};
