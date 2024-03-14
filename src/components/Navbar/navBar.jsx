import { Navbar, Nav, Container, Button} from "react-bootstrap";
import {Link} from 'react-router-dom'
import "./navBar.css";
import img from "../../assets/images/unnamed.png";
import PersonIcon from "@mui/icons-material/Person";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment} from "@mui/material";
import { useState, useEffect, Fragment} from "react";
import {getItemData} from "../../api"
import CartPage from "./../Cart/cart"
// import SignInSide from "./../Signup/signup"
import ProductList from "./../ProductList/productList"



const NavBarz = () => {
  const [anchor, setAnchor] = useState(null);
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const fetchItemData = async () => {
    if(!search) {
      const randomItems = [];
          setItems(randomItems);
      return;
    }

    const data = await getItemData(search); 

    setItems(data.products);
  }

  useEffect(() => {
      fetchItemData();
  }, [search]);

  console.log(items)

  const handleOpen = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

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
            <Nav.Link id="navbtn" className="cat-text" href="#action1">
              Sportswear
            </Nav.Link>
            <Nav.Link id="navbtn" className="cat-text" href="#action2">
              Accessories
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse id="navbarScroll" className="navbarScroll">
          <TextField
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="Textfield"
            placeholder="Search for items and brands"
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
              onMouseEnter={handleOpen}
              onMouseLeave={handleClose}
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
        {/* <div pill color="denger">{2}</div> */}
       </Link>
      </Container>
      <CartPage isOpen={cartOpen} toggleCart={toggleCart} />
    </Navbar>
      {/* <ProductList items={items}/>   */}
  </Fragment>
  );
};

export default NavBarz;
