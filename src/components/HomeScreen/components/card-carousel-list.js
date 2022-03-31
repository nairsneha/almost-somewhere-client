import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from "./location-card";
import cardList from "../../../data/loc-card-list-data.json"

const CardCarouselList = () => {
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
    return (
        <>
            <div>
                <span>Name</span>
            </div>
            <Carousel responsive={responsive} autoPlaySpeed={3000} infinite itemClass="carousel-item-padding-40-px">
                { cardList.map((item) => {
                    return(
                        <div className="pe-5">
                            <Card locdetails={item}/>
                        </div>
                    )
                })}
            </Carousel>;


        </>
    )

}

export default CardCarouselList;