import React from "react";
import "./savedItems.css";
import background from "./../../assets/images/gym3.webp"
import ProductCard from "../Cards/cards";

const SavedItem = () => {
    return (
        <div className="savedItems-container">
            <div className="savedItems-poster" style={{backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`}}>
                <h1>Wishlist</h1>
            </div>
            <div>
                <ProductCard />
            </div>
        </div>
    );
}

export default SavedItem