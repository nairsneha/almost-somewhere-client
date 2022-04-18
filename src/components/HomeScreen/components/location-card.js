import React from "react";

const LocationCard = ({
                          locDetail = {
                              name: "Web Development",
                              // photos: [{photo_reference :'../../../../public/images/tokyo-your-name.jpg'},]
                          }
                      }) => {
    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <img src={(locDetail.photos && locDetail.photos.length > 0) ? locDetail.photos[0]['photo_reference']: ''} className="card-img-top" alt="..." height="250px"/>
                    <div className="card-body">
                        <h5 className="card-title">{locDetail.name}</h5>
                        {/*{locDetail.description && <p className="card-text">{locDetail.description}</p>}*/}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LocationCard;