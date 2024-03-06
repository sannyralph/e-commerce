import React from "react";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import "./help.css"
import Button from '@mui/material/Button';

const Help = () => {
    return (
      <div className="HelpCenter-container">
        <div>
          <h1 className="HelpCenter-header">Help Center</h1>
        </div>
        <div className="Help">
           <div className="Help-item">
            <QuestionMarkIcon className="Help-icon"/>
            <h6>Need Help</h6>
            <p>The most frequently asked questions are answered in our Help Center.</p>
            <Button variant="contained" disableElevation className="button">Help Center</Button>
          </div>
          <div className="Help-item">
            <LocalShippingIcon  className="Help-icon" />
            <h6>Track Order</h6>
            <p>Want to know where your order is and when it will arrive? Track your order here. </p>
            <Button variant="contained" disableElevation className="button">Track Order</Button>
          </div>
          <div className="Help-item">
            <QuestionAnswerIcon  className="Help-icon" />
            <h6>Contact Us</h6>
            <p>Then write us a message and we will try to get back to you within a few days.</p>
            <Button variant="contained" disableElevation className="button">Contact Us</Button>
          </div>
        </div>
      </div>
    );
}; 

export default Help 