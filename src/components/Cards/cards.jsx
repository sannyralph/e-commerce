// ProductCard.js
import React from 'react';
import Slider from 'react-slick';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleAddToCart = () => {
    // Add product to cart logic
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <Slider>
          {product.images.map((image, index) => (
            <img key={index} src={image.url} alt={product.name} />
          ))}
        </Slider>
      </div>
      <div className="product-details">
        <h3>{product.brand}</h3>
        <h4>{product.name}</h4>
        <p>{product.price}</p>
        <select value={selectedSize} onChange={handleSizeChange}>
          {product.sizes.map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
