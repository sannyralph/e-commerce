import React, { useState } from "react";
import "./Cards.css";
import imgTest1 from "./../../assets/images/test1.webp";
import imgTest2 from "./../../assets/images/test2.webp";
import imgTest3 from "./../../assets/images/test3.webp";
import imgTest4 from "./../../assets/images/test4.webp";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (

    <div>
       <div className="product-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="product-image-container">
        <img
          src={imgTest2}
          alt={"itemname"}
          className="product-image"
        />
        {hovered && (
          <img src={imgTest3} alt="Alternate Image" className="hover-image" />
        )}
        <div className="heart-icon"><FavoriteBorderIcon /></div>
        {hovered && (
          <div className="size-options">
            <label>Select Size:</label>
            <select>
              <option value="XXS">XXS</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
        )}
      </div>
      <div className="product-details">
        <h2 className="product-name">{"Sport Bra"}</h2>
        <p className="product-price">{"$45"}</p>
        {/* Additional information here */}
      </div>
    </div>
    </div>
  );
};

export default ProductCard;
