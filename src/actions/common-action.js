import { REACT_APP_API_BASE } from "../config";

const PHOTOS_API = `${REACT_APP_API_BASE}/places/photo`;

export const findImage = (referenceId, maxH = 1000, maxW = 1000) => {
  if (referenceId.includes(".")) {
    return referenceId;
  } else {
    const imageSrc = `${PHOTOS_API}?photo_reference=${referenceId}&maxheight=${maxH}&maxwidth=${maxW}`;
    return imageSrc;
  }
};
