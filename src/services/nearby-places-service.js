import axios from 'axios';


// const API_BASE = process.env.REACT_APP_API_BASE || "http://almost-somewhere.herokuapp.com";
const API_BASE ="http://almost-somewhere.herokuapp.com";
const NEARBY_PLACES_API = `${API_BASE}/places/nearby`;

export const findNearbyPlace =
    async (params) => {
        const defaultParams = {lat : -71.085637, lon : 42.3417141, radius : 5000, type : "gym|theatre"};
        const safeParams = {...defaultParams,...params};
        console.log("API called");
        const response = await axios
            .get(`${NEARBY_PLACES_API}?latitude=${safeParams.lat}&longitude=${safeParams.lon}&radius=${safeParams.radius}&type=${safeParams.type}`);
            // console.log(response.data.response);
        return response.data.response;
    }