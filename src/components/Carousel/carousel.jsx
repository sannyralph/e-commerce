import React from "react";
import Carousel from "react-elastic-carousel";
import "./carousel.css";
import Item from "./item";
import background from "./../../assets/images/gym3.webp"


const  Slider = () => {
    return (
        <div className="carousel" style={{backgroundImage: `url(${background})`}}>
            <Carousel>
               <Item> "The only bad workout is the one that didn't happen." </Item>
               <Item> "Train like a beast, look like a beauty." </Item>
               <Item> "The pain you feel today will be the strength you feel tomorrow." </Item>
               <Item> "Train hard, stay humble." </Item>
            </Carousel>
        </div>
    );
};

export default Slider 