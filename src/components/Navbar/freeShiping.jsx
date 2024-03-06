import React, { useEffect } from "react";
import "./navBar.css";

const Promotions = () => {
  useEffect(() => {
    const slider = document.querySelector(".slider");
    const slides = slider.querySelectorAll(".slide");

    let currentSlide = 0;

    const slideInNext = () => {
      slides[currentSlide].style.animation = "slide-in 1s forwards";
      currentSlide = (currentSlide + 1) % slides.length;
      setTimeout(() => {
        slides[currentSlide].style.animation = "slide-in 1s forwards";
      }, 1000); 
    };

    slideInNext();
  }, []);

  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slide">30 days free returns from Germany</div>
        <div className="slide">🚚 Free Shipping Over €100</div>
        <div className="slide">10% Student Discount</div>
        {/* <div className="slide">Get 2 more items for order over  €150</div> */}
      </div>
    </div>
  );
};

export default Promotions;
