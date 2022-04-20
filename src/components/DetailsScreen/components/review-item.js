import React, {useState} from "react";
import {findImage} from "../../../actions/common-action";
import { Rating } from 'react-simple-star-rating';

const ReviewItem = ({
    reviewItem = {
        authorName: "SANDEEP BASU",
        profilePhotoUrl: "https://lh3.googleusercontent.com/a-/AOh14GgYpi8WWJX--p7f_7wkq5Wa5GQYeogAOYVKSlk5pw=s128-c0x00000000-cc-rp-mo",
        rating: 4,
        text: "Huntington YMCA is a great place to do fitness activities. I recently joined a swimming class (beginner level) and loved it totally! Very clean swimming pool, great instructor, and staffs are friendly. I am going to enroll for another 8 weeks of swimming lessons in the new year (2022)!"
    }
}) => {
    
   

    return(
        <>
            <div className="card">
                <div className="card-body">
                    <div className="row m-2">
                        <div className="col-md-2 ps-4">
                            <img src={findImage(reviewItem.profilePhotoUrl)} style={{height: "100px"}} className="img rounded-circle img-fluid"/>
                        </div>
                        <div className="col-md-10">   
                            <div className="m-2">
                                <h5>{reviewItem.authorName}</h5>
                            </div>
                            <div>
                                <Rating
                                readonly = {true}
                                allowHover = {false}
                                initialValue={0}
                                ratingValue={(reviewItem.rating/5) * 100} /* Available Props */ />
                            </div>         
                        </div>
                    </div>
                    <div className="row p-2 m-2">
                        <div>      
                                <p>{reviewItem.text}</p>
                                <p>
                                    <a className="float-right btn text-white btn-info"> <i className="fa fa-thumbs-up"></i> Useful</a>
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReviewItem;