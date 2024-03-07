import React from "react";
import Carousel from "react-elastic-carousel";
import "./carousel.css";
import Item from "./item";
import background from "./../../assets/images/gym3.webp"
import Button from '@mui/material/Button';


const  Slider = () => {
    return (
        <div className="carousel-background" style={{backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`}}>
            <Carousel className="carousel">
               <Item className="rec-item">
                   <div>
                        <p>The only bad workout  <br/> is the  one that didn't  <br/> happen.</p> 
                        <Button variant="contained" disableElevation className="button">Shop Now</Button>
                   </div>
                </Item>
               <Item className="rec-item"> 
                    <div >
                        <p>Train like a beast, <br/> look like a beauty.</p>
                        <Button variant="contained" disableElevation className="button">Shop Now</Button>
                   </div>     
                </Item>
               <Item className="rec-item">
                   <div >
                        <p>The pain you feel today  <br/>  will be the strength you  <br/>  feel tomorrow.</p>
                        <Button variant="contained" disableElevation className="button">Shop Now</Button>
                   </div> 
                </Item>
               <Item className="rec-item">
                   <div >
                        <p> Train hard, stay humble.</p>
                        <Button variant="contained" disableElevation className="button">Shop Now</Button>
                   </div>
                </Item>
            </Carousel>
        </div>
    );
};

export default Slider 