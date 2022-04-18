import axios from 'axios';


const API_BASE = process.env.REACT_APP_API_BASE || "http://almost-somewhere.herokuapp.com";
const NEARBY_PLACES_API = `${API_BASE}/places/nearby`;

export const findNearbyPlace =
    async (lat = -71.085637, lon = 42.3417141, radius = 5000, type = "gym|theatre") => {
        const response = await axios
            .get(`${NEARBY_PLACES_API}?latitude=${lat}&longitude=${lon}&radius=${radius}&type=${type}`);
        const details = response.response;
        return details;
    }