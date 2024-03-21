import { Navbar, Nav, Container, Button} from "react-bootstrap";
import {Link} from 'react-router-dom'
import "./navBar.css";
import img from "../../assets/images/unnamed.png";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment} from "@mui/material";
import { useState, Fragment} from "react";
import CartPage from "./../Cart/cart"
import { useContext } from "react";
import SettingsProvider from "../../context/settings";



const NavBarz = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };


  const {count} = useContext(SettingsProvider)
  const {setSearchItem} = useContext(SettingsProvider)
  const handleChange = (e) => {
    e.preventDefault()
    setSearchItem(e.target.value)
  }
  return (
    <Fragment>
    <Navbar expand="lg" className="navBar">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Link to="/">
        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
          <img src={img} width={150} alt={"sporton logo"} />
        </Nav>                
        </Link>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link id="navbtn" className="cat-text" href="/women">
              Sportswear
            </Nav.Link>
            <Nav.Link id="navbtn" className="cat-text" href="#action2">
              Accessories
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse id="navbarScroll" className="navbarScroll">
          <TextField
            onChange={handleChange}
            className="Textfield"
            placeholder="Search for item"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Navbar.Collapse>
        <Link to="/SignInSide">
          <Button 
              variant="outline" 
              style={{ color: "white" }}
              aria-controls="account-manu"
              aria-haspopup="true"
          >
            <PersonIcon />
          </Button>
        </Link>
       
       <Link to="/SavedItem">
        <Button variant="outline" style={{ color: "white" }}>
            {" "}
            <FavoriteIcon />{" "}
        </Button>
       </Link>
       <Link to="/Cart" onClick={toggleCart}>
       <Button variant="outline" style={{ color: "white" }}>
          {" "}
          <ShoppingBagIcon />{" "}
        </Button> 
        <div className="cartCount">
          {count}
        </div>
       </Link>
      </Container>
      <CartPage isOpen={cartOpen} toggleCart={toggleCart} />
    </Navbar>

  </Fragment>
  );
};

export default NavBarz;
