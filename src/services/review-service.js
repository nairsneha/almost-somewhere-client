import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE || "http://almost-somewhere.herokuapp.com";
const PLACES_API = `${API_BASE}/places/delails/:id`;
const NEARBY_PLACES_API = `${API_BASE}/places/nearby`;
const PHOTOS_API = `${API_BASE}/places/photos`;

export const findPlaceDetail = async (placeId) => {
    const response = await axios.get(`${PLACES_API}/${placeId}`);
    const details = response.response;
    return details;
}

export const findImage = async (referenceId, maxHeight= 1000) => {
    const response = await axios.get(`${PHOTOS_API}?photo_reference=${referenceId}&maxheight=${maxHeight}`);
    return response;
}

export const findNearbyPlace =
    async (lat = -71.085637, lon = 42.3417141, radius = 5000, type = "gym|theatre") => {
        const response = await axios
            .get(`${NEARBY_PLACES_API}?latitude=${lat}&longitude=${lon}&radius=${radius}&type=${type}`);
        const details = response.response;
        return details;
    }