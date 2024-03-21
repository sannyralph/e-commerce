import React from "react";
import "./productPage.css"
import img1 from "./../../assets/images/test1.webp"
import ProductCard from "./../Cards/cards"
import {useContext} from "react"
import SettingsProvider from "./../../context/settings"
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const ProductPage = () => {
    const {product, setProduct, count, setCount, cart, setCart} = useContext(SettingsProvider);
    const {id} = useParams()

        const  addToCart = () => {
            setCount(count + 1)
            setCart([...cart, product])
        }

        useEffect(() => {
            const fetchProductDetails = async () => {
              const query = `query ($id: ID) {
                item(where: { id: $id }) {
                  id
                  itemName
                  itemDetails
                  price
                  quantity
                  size
                  color
                  itemPhoto1 {
                    url
                  }
                  itemPhoto2 {
                    url
                  }
                }
              }`;
        
              const variables = {
                id: id,
              };
        
              try {
                const response = await axios.post(
                  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cltu613lf0hj107w33rc71zex/master",
                  {
                    query,
                    variables,
                  }
                );
        
                const { item } = response.data.data;
                setProduct(item);
              } catch (error) {
                console.error("Error fetching product details:", error);
              }
            };
        
            fetchProductDetails();
          }, [id, setProduct]);
    return (
        <>
         <div className="productDisplay">
            <div className="productDisplay-left">
                <div className="productDisplay-img-list">
                    <img  className="img" src={product?.itemPhoto2?.url} alt="product-img" /> 
                    <img className="img" src={product?.itemPhoto1?.url} alt="product-img" /> 
                    <img className="img" src={product?.itemPhoto2?.url} alt="product-img" /> 
                    <img className="img" src={product?.itemPhoto1?.url} alt="product-img" /> 
                </div>
                <div className="productDisplay-img">
                    <img src={product?.itemPhoto1?.url} alt="product-img" className="productDisplay-img-main" /> 
                </div>
            </div>
            <div className="productDisplay-right">
                <h1>Sporton </h1>
                <div className="productDisplay-despcription">{product?.itemDetails}</div>
                <div className="productDisplay-prices">
                    <div className="productDisplay-oldprics">€{29.99}</div>
                    <div className="productDisplay-newprics">€{product?.price}</div>
                </div>
                <div className="productDisplay-color">
                    <h1 className="color-header">Select Color:</h1>
                    <div className="color-select">
                    <img  className="color" src={img1} alt="product-img" /> 
                    <img  className="color" src={img1} alt="product-img" /> 
                    <img  className="color" src={img1} alt="product-img" /> 
                    <img  className="color" src={img1} alt="product-img" /> 
                    <img  className="color" src={img1} alt="product-img" /> 
                    <img  className="color" src={img1} alt="product-img" /> 
                    </div>
                </div>
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
                <button onClick={addToCart} className="addToCartbutton">ADD TO CART</button>
                <p className="productDisplay-category"><span>Category</span> <span>women</span></p>
            </div>
        </div>
       < ProductCard />
        </>
       
    );
};

export default ProductPage 