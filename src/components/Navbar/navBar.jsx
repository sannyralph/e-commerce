import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navBar.css'
import img from '../../assets/images/unnamed.png'




const NavBar = () => {

   
    return (
        <Navbar  expand="lg" className='navBar'>
          <Container fluid className='container'>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link className='navbtn' href="#action2">Men</Nav.Link>
                <Nav.Link className='navbtn' href="#action2">Women</Nav.Link>
                <Nav.Link className='navbtn' href="#action2">Kids</Nav.Link>
              </Nav>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
              >
                 <img src={img} width={150}/>
              </Nav>
             
              
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
          </Container>
        </Navbar>
      );
}

export default NavBar;