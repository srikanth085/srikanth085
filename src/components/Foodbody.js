import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function FoodDeliverySection() {
  return (
    <Container fluid className="py-5 bg-light">
      <Row className="align-items-center">
        <Col md={6} className="px-5">
          <h2 className="fw-bold">Your Favourite Food Delivered Hot & Fresh</h2>
          <p className="text-muted">
            Healthy switcher chefs do all the prep work, like peeling, chopping & marinating, 
            so you can cook a fresh food.
          </p>
          <Button variant="warning" className="text-white fw-bold px-4 py-2 rounded-pill">
            Order Now &rarr;
          </Button>
        </Col>
        <Col md={6}>
          <div className="position-relative">
            <div className="rounded-circle bg-warning" style={{ width: "400px", height: "400px", position: "absolute", top: "-50px", right: "-50px" }}></div>
            <img src="image.png" alt="Food Bowl" className="img-fluid rounded-circle position-relative" style={{ zIndex: 1 }} />
          </div>
        </Col>
      </Row>

      
    </Container>
  );
}

export default FoodDeliverySection;
