import React, {useState} from "react";
import { Rating } from 'react-simple-star-rating';

const ReviewItem = () => {
    
   

    return(
        <>
            <div className="card">
                <div className="card-body">
                    <div className="row m-2">
                        <div className="col-md-2 ps-4">
                            <img src="../../../images/profilepic.jpeg" style={{height: "100px"}} className="img rounded-circle img-fluid"/>
                        </div>
                        <div className="col-md-10">   
                            <div className="m-2">
                                <h5>Hinata Shoyo</h5>
                            </div>
                            <div>
                                <Rating
                                initialValue={0}
                                ratingValue={0} /* Available Props */ />
                            </div>         
                        </div>
                    </div>
                    <div className="row p-2 m-2">
                        <div>      
                                <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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