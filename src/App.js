import './App.css';
import NavBarz from './components/Navbar/navBar'
import Footer from './components/Footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Promotions from "./components/Navbar/freeShiping"
import SignInSide from "./components/Signup/signup"
import Hero from "./components/Hero/hero"
import ProductCard from "./components/Cards/cards"
import Slider from "./components/Carousel/carousel"
import AddPage from "./components/Carousel/addPage"
import CartPage from './components/Cart/cart';
import SavedItem from './components/SavedItems/savedItem';
import ProductPage from "./components/ProductPage/producttPage"
import { Route, BrowserRouter, Routes } from 'react-router-dom';



function App() {

  
  return (
    <div className="App">
       <di>
         <BrowserRouter>
            <NavBarz/>
            <Promotions />
          <Routes>
            <Route path='/' element={<Hero/>}/>
            <Route path="/SignInSide" element={<SignInSide/>} />
            <Route path="SavedItem" element={<SavedItem/>} /> 
            <Route path="/cart" element={<CartPage/>} /> 
            <Route path="/ProductCard" element={<ProductCard/>} />
            <Route path="/slider" element={<Slider/>} />
            <Route path="/AddPage" element={<AddPage/>} />
            <Route path="/ProductPage" element={<ProductPage/>} />
          </Routes>
          <Footer/>
         </BrowserRouter>
       </di>
       
    </div>
  );
}

export default App;
