import './App.css';
import NavBarz from './components/Navbar/navBar'
import Footer from './components/Footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Promotions from "./components/Navbar/freeShiping"
import SignInSide from "./components/Signup/signup"
import CartPage from "./components/Cart/cart"
import Hero from "./components/Hero/hero"
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
            <Route path="/cart" element={<CartPage/>} /> 
          </Routes>
          <Footer/>
         </BrowserRouter>
       </di>
       
    </div>
  );
}

export default App;
