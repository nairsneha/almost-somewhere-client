import React from "react";
import LocationCard from "./location-card";

const LocationCardList = ({
  locDetails = [
    {
      name: "Web Development",
      photos: [
        {
          photo_reference:
            "Aap_uEAiPnzpgDWC_ErLs0eTy-LF8_cCEidmA_ls-3B7o6-832qJgOAv_6UeoJ37j-eC6f20yJwC5SXOROwSxY4m16c59d5iMSAJZ0_s1psMfPNaCGWX1m2t4kx7Tcp2B4dCl2Oy_TooFjbV9P5poUXHkd7OT56ifckvECx7nkRMK0OhfCXS",
        },
      ],
    },
  ],
}) => {
  const CARD_LIMIT = 6;
  let filteredLocation = locDetails.filter(
    (val) => val.photos && val.photos.length > 0
  );
  filteredLocation = filteredLocation.filter(
    (val, index) => index < CARD_LIMIT
  );
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredLocation.map((loc) => {
          let id = new Date().getTime() + Math.random() + "";
          return <LocationCard locDetail={loc} key={id} />;
        })}
      </div>
    </>
  );
};

export default LocationCardList;
