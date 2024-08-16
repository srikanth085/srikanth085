import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Custom CSS for the gap

const Footer = () => {
    return (
        <footer className="footer text-center text-md-left ">
            <div className="footer-top-gap"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5>About</h5>
                        <hr className="bg-light" />
                        <p>Basel is a leading global IT and engineering services and solutions company revolutionizing digital transformations...</p>
                    </div>
                    <div className="col-md-3">
                        <h5>Our Services</h5>
                        <hr className="bg-light" />
                        <p>DATA & ANALYTICS</p>
                        <p>IT SERVICES</p>
                        <p>SAP</p>
                        <p>RPA</p>
                    </div>
                    <div className="col-md-3">
                        <h5>PLATFORMS</h5>
                        <hr className="bg-light" />
                        <p>SupplyVu™</p>
                        <p>Autonetics Platform</p>
                        <p>Hybrid Cloud Management</p>
                    </div>
                    <div className="col-md-3">
                        <h5>GLOBAL HEADQUARTERS</h5>
                        <hr className="bg-light" />
                        <p>Basel Technologies pvt ltd, 7th Floor, Block C...</p>
                        <p>8121567350</p>
                        <p>www.baseltechnologies.com</p>
                    </div>
                    <button>submit</button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
