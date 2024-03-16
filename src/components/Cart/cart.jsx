import React, { useState } from "react";
import "./cart.css"; // Import your cart styles here
import CloseIcon from '@mui/icons-material/Close';
import img09 from "./../../assets/images/test4.webp";
import img08 from "./../../assets/images/test3.webp";
import img07 from "./../../assets/images/test2.webp";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'; 
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useContext} from "react"
import SettingsProvider from "./../../context/settings"
import index from "react-typical";

const CartPage = ({ isOpen, toggleCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const {cart, setCart, count, setCount} = useContext(SettingsProvider)

  const deleteFromCart = (i) => {
     const newCartList = cart.filter((x, index) => index !== i )
     setCart([...newCartList])
     setCount(count - 1)
  }

  return (
    <div className={`cart ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <button className="close-button" onClick={toggleCart}>
          < CloseIcon />
        </button>
      </div>
      <div className="cart-content">
        <h2>My Cart</h2>
        <hr />
          {
            cart?.length === 0? 
            <div>
              Cart is currently empty
            </div> : cart?.map((_, i) => 
                 <div key={i}>
                 <div className="cart-item">
                   <div className="cart-image">
                     <img src={img09} alt="test pix" />
                   </div>
                   <div className="cart-info">
                     <h1>Sport Bra</h1>
                     <h1>$15</h1>
                     <p>Black</p>
                     <p>XXL</p>
                     <div className="quantity-controls">
                       <button onClick={handleDecrease}>
                         <RemoveIcon />
                       </button>
                       <input type="text" value={quantity} readOnly />
                       <button onClick={handleIncrease}>
                         <AddIcon />
                       </button>
                       <button className="cart-delete" onClick={() => deleteFromCart(i)}>
                           <DeleteForeverIcon />
                       </button>
                     </div>
                   </div>
                   
                 </div>
               </div>
            )
          }
          <hr/>
          {
            cart?.length > 0 && 
            <div>
              <div className="cart-total">
                Total: $30
              </div>
              <button className="checkout-button">Checkout</button>
            </div>
          }
        
      </div>
    </div>
  );
};

export default CartPage;
