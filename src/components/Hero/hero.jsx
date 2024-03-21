import React from "react"
import ProductCard from "./../Cards/cards"
import Slider from "./../Carousel/carousel"
import Help from "./../Product/help"
import AddPage from "../Carousel/addPage"
import {useState, useEffect} from "react"
import axios from 'axios';

const Hero = () => {
    const [items, setItems] = useState([])

  useEffect(() => {
    async function getAllProducts(){
      await axios.request({
        url: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cltu613lf0hj107w33rc71zex/master",
        method: "POST",
        data: {
          query: `{items{
              id
              itemName
              itemDetails
              price
              quantity
              size
              itemPhoto1 {
                url
              }
              itemPhoto2 {
                url
              }
          }}`
        }
      }).then((res) => {
        // console.log(res.data.data.items); 
        setItems(res.data.data.items);
      }).catch(error => {
        console.error('Error fetching data:', error);
      });
    }
    getAllProducts();
}, []);
    return (
        
        <div>
            <Slider />
            <ProductCard items = {items} />
            <AddPage />
            <ProductCard items = {items}/>
            <Help /> 
        </div>
    );
} ;

export default Hero 