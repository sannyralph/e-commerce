import './App.css';
import NavBarz from './components/Navbar/navBar'
import Footer from './components/Footer/footer'
import ProductCard from "./components/Cards/cards"
import Slider from "./components/Carousel/carousel"
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  
  return (
    <div className="App">
       <di>
          <NavBarz/>
          <Slider />
          <ProductCard />
          <Footer/>
       </di>
       
    </div>
  );
}

export default App;
