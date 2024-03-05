import React from "react"
import ProductCard from "./../Cards/cards"
import Slider from "./../Carousel/carousel"
import Help from "./../Product/help"

const Hero = () => {
    return (
        <div>
            <Slider />
            <Help /> 
            <ProductCard />
        </div>
    );
} ;

export default Hero 