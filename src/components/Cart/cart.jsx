import React, { useState, useEffect } from "react";
import "./cart.css"; 
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'; 
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext } from "react";
import SettingsProvider from "./../../context/settings";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CartPage = ({ isOpen, toggleCart }) => {
  const { cart, setCart, count, setCount } = useContext(SettingsProvider);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const updatedCart = cart.map(item => ({ ...item, quantity: 1 }));
    setCartItems(updatedCart);
  }, [cart]);

  const handleIncrease = (index) => {
    setCartItems(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems[index].quantity = updatedItems[index].quantity + 1;
      return updatedItems;
    });
  };
  
  const handleDecrease = (index) => {
    setCartItems(prevItems => {
      const updatedItems = [...prevItems];
      if (updatedItems[index].quantity > 1) {
        updatedItems[index].quantity = updatedItems[index].quantity - 1;
      }
      return updatedItems;
    });
  };
  
  const deleteFromCart = (i) => {
    const newCartList = cart.filter((_, index) => index !== i);
    setCart([...newCartList]);
    setCount(count - 1);
  };

  const calculateItemPrice = (price, quantity) => {
    return price * quantity;
  };

  let aggregate = cartItems?.reduce((previousVal, currentItem) => {
    if (typeof currentItem.price === 'number' && !isNaN(currentItem.price)) {
      return previousVal + calculateItemPrice(currentItem.price, currentItem.quantity);
    }
    return previousVal;
  }, 0);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  });

  const handleCheckout = async () => {
    await axios.get(`http://localhost:8080/secret/${aggregate}`)
    .then((res) => {
        navigate(`/checkout/${res.data.client_secret}`)
      }
    )
}

  return (
    <div className={`cart ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <button className="close-button" onClick={toggleCart}>
          <CloseIcon />
        </button>
      </div>
      <div className="cart-content">
        <h2>My Cart</h2>
        <hr />
        {
          cartItems?.length === 0 ?
            <div>
              Cart is currently empty
            </div> : cartItems?.map((item, i) =>
              <div key={i}>
                <div className="cart-item">
                  <div className="cart-image">
                    <img src={item?.itemPhoto1?.url} alt="test pix" />
                  </div>
                  <div className="cart-info">
                    <h1>{item?.itemName}</h1>
                    <h1>€{calculateItemPrice(item?.price, item.quantity)}</h1>
                    <p>{item?.color}</p>
                    <p>{item?.size}</p>
                    <div className="quantity-controls">
                      <button onClick={() => handleDecrease(i)}>
                        <RemoveIcon />
                      </button>
                      <input type="text" value={item.quantity} readOnly />
                      <button onClick={() => handleIncrease(i)}>
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
        <hr />
        {
          cartItems?.length > 0 &&
          <div>
            <div className="cart-total">
              {formatter.format(aggregate)}
            </div>
            <button onClick={handleCheckout} className="checkout-button">Checkout</button>
          </div>
        }
      </div>
    </div>
  );
};

export default CartPage;
