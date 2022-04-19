import React from "react";
import {findImage} from "../../../actions/common-action";
import {Link} from "react-router-dom";

const LocationCard = ({
                          locDetail = {
                              name: "Web Development",
                              photos: [{photo_reference: 'Aap_uEAiPnzpgDWC_ErLs0eTy-LF8_cCEidmA_ls-3B7o6-832qJgOAv_6UeoJ37j-eC6f20yJwC5SXOROwSxY4m16c59d5iMSAJZ0_s1psMfPNaCGWX1m2t4kx7Tcp2B4dCl2Oy_TooFjbV9P5poUXHkd7OT56ifckvECx7nkRMK0OhfCXS'},],
                              place_id:"uniqueId"
                          }
                      }) => {
    return (
        <>
            <div className="col">
                <Link className=""
                      to={"/detail/"+locDetail.place_id}>
                    <div className="card h-100">
                        <img
                            src={(locDetail.photos && locDetail.photos.length > 0) ? findImage(locDetail.photos[0]['photo_reference']) : ''}
                            className="card-img-top" alt="..." height="250px"/>
                        <div className="card-body">
                            <h5 className="card-title">{locDetail.name}</h5>
                            {locDetail.description && <p className="card-text">{locDetail.description}</p>}
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default LocationCard;