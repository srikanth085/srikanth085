import React,{useState} from "react";
import { Container, Row, Col, Button,card, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTwitter, FaLinkedinIn, FaYoutube, FaFacebookF } from 'react-icons/fa';
import Footer from "./Food2";


const BalancedDietSection = () => {
   
  return (
    <>
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={5} className="text-center">
          <img
            src="image.png" // Replace with the path to your image
            alt="Balanced Diet"
            className="img-fluid rounded-circle"
            style={{ width: "400px", height: "400px" }}
          />
        </Col>
        <Col md={7}>
          <p className="text-warning font-weight-bold">About</p>
          <h2 className="font-weight-bold">
            Food Is An Important Part Of A Balanced Diet
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <p>
            Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
            facilisis at fringilla quam.
          </p>
          <Button variant="warning" className="me-3">
            Learn More
          </Button>
          <Button variant="outline-dark">
            <i className="bi bi-play-circle"></i> Watch Video
          </Button>
        </Col>
      </Row>
      <Container className="text-center my-5">
      <p className="text-warning font-weight-bold">Work</p>
      <h2 className="font-weight-bold">How It Works</h2>
      <p className="text-muted">
        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit.
        Dolor turpis molestie dui magnis facilisis at fringilla quam.
      </p>
    </Container>
    <Container>
    
    <div className="container my-5">
      <div className="row text-center">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-header bg-warning"></div>
            <div className="card-title bg-secondary p-3">
              <h3 className="fw-bold">Pick Meals</h3>
            </div>
            <div className="card-body">
              Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis
              duis elementum interdum facilisi bibendum.
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-header bg-warning"></div>
            <div className="card-title bg-primary p-3">
              <h3 className="fw-bold">Choose How Often</h3>
            </div>
            <div className="card-body">
              Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis
              duis elementum interdum facilisi bibendum.
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-header bg-warning"></div>
            <div className="card-title bg-primary p-3">
              <h3 className="fw-bold">Fast Deliveries</h3>
            </div>
            <div className="card-body">
              Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis
              duis elementum interdum facilisi bibendum.
            </div>
          </div>
        </div>
      </div>
    </div>

    </Container>

    </Container>
    <div>
    <div className=" d-flex text-warning justify-content-center fw-bold"><p > Testimonial</p>    
    </div>
    <h2 className="fw-bold d-flex  justify-content-center">What They Are Saying</h2>
      <p className="text-muted d-flex  justify-content-center">
        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit.
        Dolor turpis molestie dui magnis facilisis at fringilla quam.
      </p>

    
    </div>
    <div className="row">
    <div className="col-md-3"></div>
    <Card className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center mt-2 mb-3">
  <img src="logo.jpeg" className="d-flex  justify-content-center ms-4 mt-3" style={{borderRadius:'50%' ,width:'80px'}}/>
 
  <p className="d-flex w-75 align-items-center text-center fs-5">
        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit.
        Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>  
           <span className="text-warning fs-3 mb-3">★★★★★</span>
       <p className="fs-4 mb-3 fw-bold">Jhon Doe</p>
    </Card>
    </div>
    <div >
        <p className="d-flex justify-content-center align-items-center text-center fs-3 fw-bold mt-2"> Have A Quation In Mind ?</p>
          <p  className="d-flex justify-content-center align-items-center text-center fs-3 fw-bold"> Let Us Help You</p></div>
          <div className="container d-flex justify-content-center align-items-center ">
          <div className="input-group d-flex justify-content-center align-items-center w-25 mt-2 mb-3">
  <input type="text" placeholder="your@email.com" className="form-control  me-2" />
  <button className="btn text-light bg-primary">Submit</button>
</div>
</div>


 
     
      <Footer/>
</>

  )}

export default BalancedDietSection;
