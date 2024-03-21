import React, { useState } from "react";
import "./cart.css"; // Import your cart styles here
import CloseIcon from '@mui/icons-material/Close';
import img09 from "./../../assets/images/test4.webp";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'; 
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useContext} from "react"
import SettingsProvider from "./../../context/settings"


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

  let aggregate = cart?.reduce((previousVal, currentItem) => {
    if (typeof currentItem.price === 'number' && !isNaN(currentItem.price)) {
      return previousVal + currentItem.price;
    }
    
    return previousVal;
  }, 0);

  const deleteFromCart = (i) => {
     const newCartList = cart.filter((x, index) => index !== i )
     setCart([...newCartList])
     setCount(count - 1)
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  });

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
                 <div className="cart-item" to = {`/ProductPage/${_?.id}`}>
                   <div className="cart-image">
                     <img src={_?.itemPhoto1?.url} alt="test pix" />
                   </div>
                   <div className="cart-info">
                     <h1>{_?.itemName}</h1>
                     <h1>€{_?.price}</h1>
                     <p>{_?.color}</p>
                     <p>{_?.size}</p>
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
                {formatter.format(aggregate)}
              </div>
              <button className="checkout-button">Checkout</button>
            </div>
          }
        
      </div>
    </div>
  );
};

export default CartPage;
