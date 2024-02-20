import './App.css';
import NavBarz from './components/Navbar/navBar'
import Footer from './components/Footer/footer'
import ProductCard from "./components/Cards/cards"
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  
  return (
    <div className="App">
       <di>
          <NavBarz/>
          <ProductCard />
          <Footer/>
       </di>
       
    </div>
  );
}

export default App;
