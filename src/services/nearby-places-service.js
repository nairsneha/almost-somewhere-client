import axios from "axios";
import { REACT_APP_API_BASE } from "../config";

const NEARBY_PLACES_API = `${REACT_APP_API_BASE}/places/nearby`;
const SEARCH_PLACE_API = `${REACT_APP_API_BASE}/places/search`;

export const findNearbyPlace = async (params) => {
  const defaultParams = {
    lat: -71.0878681,
    lon: 42.3380983,
    radius: 5000,
    type: "gym|theatre",
  };

  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
      defaultParams.lon = position.coords.latitude;
      defaultParams.lat = position.coords.longitude;
    });
  }


  const safeParams = { ...defaultParams, ...params };
  const response = await axios.get(
    `${NEARBY_PLACES_API}?latitude=${safeParams.lat}&longitude=${safeParams.lon}&radius=${safeParams.radius}&type=${safeParams.type}`
  );
  return response.data.response;
};

export const findPlaceByQuery = async (params) => {
  const locationParams = "?location=42.3417141,-71.085637";
  const response = await axios.get(
      `${SEARCH_PLACE_API}/${params.query}${locationParams}`
  );
  return response.data.response;
};


