import React from "react";
import CardCarouselList from "./components/card-carousel-list";
import LocationCardList from "./components/location-card-list";

const HomeScreen = () => {
    return(<div>
        <LocationCardList/>
        <CardCarouselList/>
    </div>
    )}

export default HomeScreen;