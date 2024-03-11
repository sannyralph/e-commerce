import React, { useState } from "react";
import "./Cards.css";
// import imgTest1 from "./../../assets/images/test1.webp";
import imgTest2 from "./../../assets/images/test2.webp";
import imgTest3 from "./../../assets/images/test3.webp";
// import imgTest4 from "./../../assets/images/test4.webp";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Link} from 'react-router-dom'

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
       <div>
          <h1 className="ProductCard-header">Latest Release</h1>
        </div>
      <div className="productCard-container">
      <Link to="/ProductPage">
      <div className="product-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="product-image-container">
        <img
          src={imgTest3}
          alt={"itemname"}
          className="product-image"
        />
        {hovered && (
          <img src={imgTest2} alt="modelpost" className="hover-image" />
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
        <h2 className="product-name">Evolution Seamless Low</h2>
        <p className="product-color">Black</p>
        <p className="product-price">€45</p>
        {/* Additional information here */}
      </div>
    </div>
      </Link>
      
    <div className="product-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="product-image-container">
        <img
          src={imgTest2}
          alt={"itemname"}
          className="product-image"
        />
        {hovered && (
          <img src={imgTest3} alt="modelpost" className="hover-image" />
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
        <h2 className="product-name">Evolution Seamless Low Back Bra</h2>
        <p  className="product-color">Gray</p>
        <p className="product-price">€45</p>
        {/* Additional information here */}
      </div>
    </div>
    <div className="product-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="product-image-container">
        <img
          src={imgTest3}
          alt={"itemname"}
          className="product-image"
        />
        {hovered && (
          <img src={imgTest2} alt={"img"} className="hover-image" />
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
        <h2 className="product-name">Evolution Seamless Low Back Bra</h2>
        <p className="product-color">Pink</p>
        <p className="product-price">€45</p>
        {/* Additional information here */}
      </div>
    </div>
    <div className="product-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="product-image-container">
        <img
          src={imgTest2}
          alt={"itemname"}
          className="product-image"
        />
        {hovered && (
          <img src={imgTest3} alt="modelpost" className="hover-image" />
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
        <h2 className="product-name">Evolution Seamless Low Back Bra</h2>
        <p className="product-color">Black</p>
        <p className="product-price">€45</p>
        {/* Additional information here */}
      </div>
    </div>
      </div>
    </div>
  );
};

export default ProductCard;
