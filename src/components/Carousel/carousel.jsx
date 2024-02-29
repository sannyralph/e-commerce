import React from "react";
import Carousel from "react-elastic-carousel";
import "./carousel.css";
import Item from "./item";
import background from "./../../assets/images/gym3.webp"


const  Slider = () => {
    return (
        <div className="carousel-background" style={{backgroundImage: `url(${background})`}}>
            <Carousel className="carousel">
               <Item className="rec-item"> "The only bad workout <br/>is the one that <br/>didn't happen." </Item>
               <Item className="rec-item"> "Train like a beast, <br/>look like a beauty." </Item>
               <Item className="rec-item"> "The pain you feel today <br/>will be the strength <br/>you feel tomorrow." </Item>
               <Item className="rec-item"> "Train hard, <br/>stay humble." </Item>
            </Carousel>
        </div>
    );
};

export default Slider 