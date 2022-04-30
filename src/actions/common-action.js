import { NODE_ENV, REACT_APP_API_BASE } from "../config";

const PHOTOS_API = `${REACT_APP_API_BASE}/places/photo`;

export const findImage = (referenceId, maxH = 1000, maxW = 1000) => {
  if (NODE_ENV !== "production") {
    // Return placeholder image in development mode so that we dont get billed.
    return "https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg";
  }
  if (referenceId.includes(".")) {
    return referenceId;
  } else {
    const imageSrc = `${PHOTOS_API}?photo_reference=${referenceId}&maxheight=${maxH}&maxwidth=${maxW}`;
    return imageSrc;
  }
};
