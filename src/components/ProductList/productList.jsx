import ProductCard from "../Cards/cards"
import {React} from "react"


const ProductList = ({items}) => {
    return (
        <div>
            {items?.map((item) => (
                <ProductCard key={item.id} item={item} /> 
            ))}
        </div>
    );
};

export default ProductList 