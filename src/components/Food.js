import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
// import 'bootstrap/dist/css/bootstrap.min.css';
import FoodDeliverySection from "./Foodbody";
import BalancedDietSection from "./Foodbody1";


function FoodieNavbar() {
  return (
    <>
    <Navbar bg="light" expand="lg" >
      <div className="container-fluid d-flex align-items-center justifyContent-between  ">
        <Navbar.Brand href="#" className="text-warning fw-bold">FOODIE</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
  
          <Nav className="me-auto ">
            <Nav.Link href="#" className="text-dark">Home</Nav.Link>
            <Nav.Link href="#" className="text-dark">About</Nav.Link>
            <Nav.Link href="#" className="text-dark">Testimonials</Nav.Link>
            <Nav.Link href="#" className="text-dark">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#" className="text-dark">
              <FaShoppingCart />
            </Nav.Link>
            <Button variant="light" className="bg-warning text-white fw-bold rounded-pill">
              Booking Now
            </Button>
          </Nav>
    
      </div>
    
    </Navbar>

    <FoodDeliverySection/>
    <BalancedDietSection/>
    </>



  );
}

export default FoodieNavbar;
