import React, { useState } from "react";
import "./Cards.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Link} from 'react-router-dom'
import { useContext } from "react";
import SettingsContext from "./../../context/settings"

const ProductCard = ({items}) => {
    console.log(items)
  const {searchItem} = useContext(SettingsContext)

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const truncate = (str, n) => {
      return String(str).length > n ? String(str).substring(0, n-1)
      + "..." : str
  }

  return (

    <div>
       <div>
          <h1 className="ProductCard-header">Latest Release</h1>
        </div>
      <div className="productCard-container">
        {
          items?.filter((val) => {
             if(searchItem === ""){
               return val 
             } else if(val?.itemDetails.toLowerCase().includes(searchItem.toLowerCase())){
               return val 
             }
             return false
          })?.map((x, i) => (
            <Link className="itemLink" to={`/ProductPage/${x?.id}`}>
              <div key={i} className="product-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="product-image-container">
              <img
                src={x?.itemPhoto1.url}
                alt={"itemname"}
                className="product-image"
              />
              {hovered && (
                <img src={x?.itemPhoto2.url} alt="modelpost" className="hover-image" />
              )}
              <div className="heart-icon"><FavoriteBorderIcon /></div>
              {hovered && (
                <div className="size-options">
                  <label>Select Size</label>
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
              <h2 className="product-name">{truncate(x?.itemDetails, 25)}</h2>
              <p className="product-color">{x?.color}</p>
              <p className="product-price">€{x?.price}</p>
            </div>
          </div>
            </Link>
            
          ))
        }
      </div>
    </div>
  );
};

export default ProductCard;
