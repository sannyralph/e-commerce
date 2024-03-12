import React from "react";
import "./productPage.css"
import img1 from "./../../assets/images/test1.webp"

const ProductPage = () => {
    return (
        <div className="productDisplay">
            <div className="productDisplay-left">
                <div className="productDisplay-img-list">
                    <img  className="img" src={img1} alt="product-img" /> 
                    <img className="img" src={img1} alt="product-img" /> 
                    <img className="img" src={img1} alt="product-img" /> 
                    <img className="img" src={img1} alt="product-img" /> 
                </div>
                <div className="productDisplay-img">
                    <img src={img1} alt="product-img" className="productDisplay-img-main" /> 
                </div>
            </div>
            <div className="productDisplay-right">
                <h1>Sporton </h1>
                <div className="productDisplay-prices">
                    <div className="productDisplay-oldprics">€29.99</div>
                    <div className="productDisplay-newprics">€9.99</div>
                </div>
                <div className="productDisplay-despcription">VITAL SEAMLESS 2.0 LONG SLEEVE CROP TOP</div>
                <div className="productDisplay-size">
                    <h1 className="size-header">Select Size:</h1>
                    <div className="size-select">
                        <div className="sizes">XXS</div>
                        <div className="sizes">XS</div>
                        <div className="sizes">S</div>
                        <div className="sizes">M</div>
                        <div className="sizes">L</div>
                        <div className="sizes">XL</div>
                        <div className="sizes">XL</div>
                    </div>
                </div>
                <button className="button">ADD TO CART</button>
                <p className="productDisplay-category"><span>Category</span> <span>women</span></p>
            </div>
        </div>
    );
};

export default ProductPage 