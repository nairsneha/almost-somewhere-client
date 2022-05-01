import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from "./location-card";

const CardCarouselList = ({
                              title="title",locDetails = [
                                  {
                                      name: "Web Development",
                                      photos: [{photo_reference: 'Aap_uEAiPnzpgDWC_ErLs0eTy-LF8_cCEidmA_ls-3B7o6-832qJgOAv_6UeoJ37j-eC6f20yJwC5SXOROwSxY4m16c59d5iMSAJZ0_s1psMfPNaCGWX1m2t4kx7Tcp2B4dCl2Oy_TooFjbV9P5poUXHkd7OT56ifckvECx7nkRMK0OhfCXS'}
                                      ]
                                  }]
                          }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5,
            partialVisibilityGutter: 40
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3,
            partialVisibilityGutter: 40
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
            partialVisibilityGutter: 40
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };
    const headerCase = (title) => {
        return title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    }
    let filteredLocation = locDetails.filter((val) => val.photos && val.photos.length > 0);
    return (
        <>
            <div>
                <span className="fs-2 fw-light">{headerCase(title)}</span>
            </div>
            <Carousel responsive={responsive} autoPlaySpeed={3000} infinite itemClass="carousel-item-padding-40-px">
                {filteredLocation.map((item) => {
                    return (
                        <div key={new Date().getTime() + ""} className="pe-5">
                            <Card locDetail={item}/>
                        </div>
                    )
                })}
            </Carousel>


        </>
    )

}

export default CardCarouselList;