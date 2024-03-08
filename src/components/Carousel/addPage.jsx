import React from "react";
import "./carousel.css";
import Item from "./item";
import background from "./../../assets/images/backimg2.webp"
import Button from '@mui/material/Button';


const  AddPage = () => {
    return (
        <div className="addPage-background" style={{backgroundImage: ` url(${background})`}}>
            <div className="carousel">
               <Item className="addPage-item">
                   <div>
                        <p>OUR SPECIAL SPRING FITS</p> 
                        <Button variant="contained" disableElevation className="addPage-button">Shop Now</Button>
                   </div>
                </Item>
            </div>
        </div>
    );
};

export default AddPage 