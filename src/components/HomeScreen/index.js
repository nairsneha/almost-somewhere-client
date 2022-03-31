import React from "react";
import CardCarousel from "./components/card-carousel";
import LocationCardList from "./components/location-card-list";

const HomeScreen = () => {
    return(<div>
        <LocationCardList/>
        <CardCarousel/>
    </div>
    )}

export default HomeScreen;