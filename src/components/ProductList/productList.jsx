import ProductCard from "../Cards/cards"
import {React} from "react"
import "./../Cards/Cards.css"


const ProductList = ({items}) => {
    return (
        <div className="product-list">
            {items?.map((item) => (
                <ProductCard key={item.id} item={item} /> 
            ))}
        </div>
    );
};

export default ProductList 