import React from "react"

const PlaceDetails = ({details = {
    formattedPhoneNumber: "(617) 927-8060",
    openNow: false,
    weekdayText: [
        "Monday: 6:00 AM – 10:00 PM",
        "Tuesday: 6:00 AM – 10:00 PM",
        "Wednesday: 6:00 AM – 10:00 PM",
        "Thursday: 6:00 AM – 10:00 PM",
        "Friday: 6:00 AM – 9:00 PM",
        "Saturday: 7:00 AM – 6:00 PM",
        "Sunday: 8:00 AM – 5:00 PM"
    ],
    formattedAddress: "75 Saint Alphonsus Street, Boston, MA 02120"}}) => {
    return(
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <span className="col-2">Phone No:</span>
                    <span className="col-8">{details.formattedPhoneNumber}</span>
                    <span className="col-2">
                        {details.openNow &&  <span className="badge rounded-pill bg-success">Open Now</span>}
                        {!details.openNow &&  <span className="badge rounded-pill bg-warning">Closed Now</span>}
                    </span>
                </div>
                <div className="row">
                    <span className="col-2">Address:</span>
                    <span className="col-8">{details.formattedAddress}</span>
                </div>
                <div className="row">
                    <span className="col-2">Open Hours:</span>
                    <span className="col-8">
                        <ul>
                            {details.weekdayText.map(dayDetail => <li key={dayDetail}>{dayDetail}</li>)}
                        </ul>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default PlaceDetails