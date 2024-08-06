import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";



function Register() {
  return (
    <div>
    <div className="" style={{background:'url("Rectangle 1.png")',backgroundSize:'cover' ,backgroundPosition:'center',height:'80vh'}}>
      <footer className="text-white pt-5 pb-4" >
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
              <p>
                Basel is a leading global IT and engineering services and solutions company revolutionizing digital transformations. We believe in enabling clients to maximize the potential and achieve a greater market with a wide array of technology services.
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold ">Our Services</h5>
              <p>
                <a href="/" className="text-white" style={{textDecoration:'none'}}>DATA & ANALYTICS</a>
              </p>
              <p>
                <a href="/" className="text-white"  style={{textDecoration:'none'}}>IT SERVICES</a>
              </p>
              <p>
                <a href="/" className="text-white"  style={{textDecoration:'none'}}>Web&Desing Devlopment</a>
              </p>
              <p>
                <a href="/" className="text-white"  style={{textDecoration:'none'}}>Cloud services</a></p>
                
                
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold">Platforms</h5>
              <p>
                <a href="/" className="text-white"  style={{textDecoration:'none'}}>SupplyVu™</a>
              </p>
              <p>
                <a href="/" className="text-white"  style={{textDecoration:'none'}}>Autonetics Platform</a>
              </p>
              <p>
                <a href="/" className="text-white"  style={{textDecoration:'none'}}>Hybrid Cloud Management</a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold">Global Headquarters</h5>
              <p>
                <i className="fas fa-home mr-3"></i><ImLocation fs-2/>
                Basel Technologies pvt ltd, 7th Floor, Block C, Laxmi Cyber City, Whitefields, HITEC City, Kondapur, Hyderabad, Telangana 500081
              </p>
              <p>
                <i className="fs-6 p-2"> <FaPhoneAlt /> </i> 203-264-0999 
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> Email: shre@virpietech.com www.virpietech.com
              </p>
<div className='col d-flex justify-content-between fs-2'>
<FaFacebook />
<FaSquareTwitter />
<FiInstagram />
<FiYoutube />
</div>
            </div>
          </div>
        </div>
      </footer>
      </div>
      </div>
  )
}

export default Register