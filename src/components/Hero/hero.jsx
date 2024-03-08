import React from "react"
import ProductCard from "./../Cards/cards"
import Slider from "./../Carousel/carousel"
import Help from "./../Product/help"
import AddPage from "../Carousel/addPage"

const Hero = () => {
    return (
        <div>
            <Slider />
            <ProductCard />
            <AddPage />
            <ProductCard />
            <Help /> 
        </div>
    );
} ;

export default Hero 