import React from "react";

const LocationCard = ({
                          locdetails = {
                              title: "Web Development",
                              image: "./images/tokyo-your-name.jpg",
                          }
                      }) => {

    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <img src={locdetails.image} className="card-img-top" alt="..." height="250px"/>
                    <div className="card-body">
                        <h5 className="card-title">{locdetails.title}</h5>
                        {locdetails.description && <p className="card-text">{locdetails.description}</p>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LocationCard;