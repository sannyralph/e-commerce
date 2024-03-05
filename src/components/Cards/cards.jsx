import React from "react";
import "./Cards.css"

const ProductCard = ({ item }) => {
  return (
    <div className="product-card">
      <img src={`https:${item?.imageUrl}`}  alt={item?.brandName} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{item?.brandName}</h2>
        <p className="product-price">{item?.price.current.text}</p>
        {/* You can add additional information here */}
      </div>
    </div>
  );
};

export default ProductCard;