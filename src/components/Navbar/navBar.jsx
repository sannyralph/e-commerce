import { Navbar, Nav, Container, Button} from "react-bootstrap";
import "./navBar.css";
import img from "../../assets/images/unnamed.png";
import PersonIcon from "@mui/icons-material/Person";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment, Menu, MenuItem} from "@mui/material";
import { useState, useEffect, Fragment} from "react";
import {getItemData} from "../../api"
import SignInSide from "./../Signup/signup"
import ProductList from "./../ProductList/productList"



const NavBarz = () => {
  const [anchor, setAnchor] = useState(null);
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);

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

        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
          <img src={img} width={150} alt={"sporton logo"} />
        </Nav>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link id="navbtn" className="cat-text" href="#action1">
              Ladies
            </Nav.Link>
            <Nav.Link id="navbtn" className="cat-text" href="#action2">
              Men's
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
        {/* <Menu
          id="account-manu"
          anchor={anchor}
          open={Boolean(anchor)}
          onClose={handleClose}
          onMouseEnter={handleOpen}
          onMouseLeave={ () => anchor && handleClose}
          anchorOrigin= {{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          getContentAnchor={null}
        >
          <MenuItem onClick={handleClose}>Sign In</MenuItem>
          <MenuItem onClick={handleClose}>Account</MenuItem>
          <MenuItem onClick={handleClose}>My Order</MenuItem>
          <MenuItem onClick={handleClose}>My Returns</MenuItem>
          <MenuItem onClick={handleClose}>Help</MenuItem>
        </Menu> */}
        <Button variant="outline" style={{ color: "white" }}>
          {" "}
          <FavoriteIcon />{" "}
        </Button>
        <Button variant="outline" style={{ color: "white" }}>
          {" "}
          <ShoppingBagIcon />{" "}
        </Button>
      </Container>
    </Navbar>
      {/* <ProductList items={items}/>   */}
  </Fragment>
  );
};

export default NavBarz;
