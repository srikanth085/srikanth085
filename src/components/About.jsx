import React from 'react'
import Navbar from './Navbar'

import Footer from './Footer'
import Clickevent from './Clickevent'
// import Demo from './Demo'

function About() {
  return (
   
    <div>   
         <Navbar/> 
         {/* <Demo/> */}
         <Clickevent/>  
          <div id="demo" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button> 
     </div>
    
    
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/image3.jpeg" alt="Los Angeles" class="d-block w-20"/>
      </div>
      <div class="carousel-item">
        <img src="/img3 (2).jpg" alt="Chicago" class="d-block w-2"/>
      </div>
      <div class="carousel-item">
        <img src="/img5.webp" alt="New York" class="d-block w-1"/>
      </div>
      <Footer/>
    </div>
    
    
    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
    </div>
    <footer/> 
    </div>
  )
}
export default About