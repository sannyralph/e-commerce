import './App.css';
import NavBarz from './components/Navbar/navBar'
import Footer from './components/Footer/footer'
import ProductCard from "./components/Cards/cards"
import Slider from "./components/Carousel/carousel"
import 'bootstrap/dist/css/bootstrap.min.css'
import Promotions from "./components/Navbar/freeShiping"
import Help from "./components/Product/help"


function App() {

  
  return (
    <div className="App">
       <di>
          <NavBarz/>
          <Promotions />
          <Slider />
          <Help /> 
          <ProductCard />
          <Footer/>
       </di>
       
    </div>
  );
}

export default App;
