import React, { useState } from "react";
import "./cart.css"; // Import your cart styles here
import CloseIcon from '@mui/icons-material/Close';
import img09 from "./../../assets/images/test4.webp"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'; 

const CartPage = ({ isOpen, toggleCart }) => {
    return (
        <div className={`cart ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <button className="close-button" onClick={toggleCart}>
            < CloseIcon />
          </button>
        </div>
        <div className="cart-content">
          {/* Your cart items and total */}
          <h2>My Cart</h2>
          <br />
            <div>
                <div className="cart-item">
                    <div className="cart-image">
                        <img src={img09} alt="test pix" />
                    </div>
                    <div className="cart-info">
                       <h1>Sport Bra</h1>
                       <h1>$15</h1>
                        <p>Black</p>
                        <p>XXL</p>
                    </div>
                    <div className="cart-delete">
                        < DeleteForeverIcon />
                    </div>
                </div>
            </div>
          <div className="cart-total">
            Total: $30
          </div>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    );
  };
  
export default CartPage;
