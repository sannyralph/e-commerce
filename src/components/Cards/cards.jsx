// ProductCard.js
import React from 'react';
import { useState } from 'react';

const ProductCard = ({ item }) => {
 
  return (
    <div className="product-card">
      <h3>{item?.brandName}</h3>
    </div>
  );
};

export default ProductCard;
