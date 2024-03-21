import { useState, createContext }  from "react";

const  SettingsContext = createContext()

export const SettingsProvider = ({children}) => {
    const [product, setProduct ] = useState([])
    const [count, setCount ] = useState(0)
    const [cart, setCart ] = useState([])
    const [searchItem, setSearchItem ] = useState("")

    const values = {product, setProduct, count, setCount, cart, setCart, searchItem, setSearchItem}
        
        return <SettingsContext.Provider value={values}>
                {children}
               </SettingsContext.Provider>
} 

export default SettingsContext

