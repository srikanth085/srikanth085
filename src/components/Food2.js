import React from 'react';
import { FaTwitter, FaLinkedinIn, FaYoutube, FaFacebookF } from 'react-icons/fa';
// import './Footer.css'; // Import the CSS file for styling
import './food.css';
 
const Footer = () => {
  return (
<footer className="footer">
<div className="footer-section logo-social">
<h2>FOODIE</h2>
<div className="social-icons">
<a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
<a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
<a href="https://youtube.com" aria-label="YouTube"><FaYoutube /></a>
<a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
</div>
</div>
 
      <div className="footer-section contact-info">
<ul>
<li>Quality</li>
<li>Help</li>
<li>Share</li>
<li>Careers</li>
<li>Work</li>
<li>Testimonials</li>
</ul>
<ul>
<li>244-5333-7783</li>
<li>hello@food.com</li>
<li>press@food.com</li>
<li>contact@food.com</li>
</ul>
</div>
 
      <div className="footer-section legal-links">
<ul>
<li><a href="#">Terms & Conditions</a></li>
<li><a href="#">Privacy Policy</a></li>
</ul>

</div>

</footer> 

  );
};
export default Footer