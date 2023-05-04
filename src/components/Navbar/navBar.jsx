import {Navbar, Nav, Form, Container, Button } from 'react-bootstrap';
import './navBar.css'
import img from '../../assets/images/unnamed.png'





const NavBarz = () => {

   
    return (
      <Navbar bg="light" expand="lg">
      <Container fluid>
      <Navbar.Toggle aria-controls="navbarScroll" />
      
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link id='navbtn' href="#action1">Men</Nav.Link>
            <Nav.Link id='navbtn' href="#action2">Women</Nav.Link>
            <Nav.Link id='navbtn' href="#action2">Kids</Nav.Link>
          </Nav>
        </Navbar.Collapse>
          <Nav className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}>
              <img src={img} width={150}/>
          </Nav>
        <Navbar.Collapse id="navbarScroll" className='navbarScroll'>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
       </Navbar.Collapse>
       
      </Container>
    </Navbar>
      );
}

export default NavBarz;

