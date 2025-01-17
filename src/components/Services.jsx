import React from 'react'


function Services() {
  return (
    <div> 
      <div id="demo" class="carousel slide" data-bs-ride="carousel">


<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>


<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="la.jpg" alt="Los Angeles" class="d-block w-100"/>
  </div>
  <div class="carousel-item">
    <img src="chicago.jpg" alt="Chicago" class="d-block w-100"/>
  </div>
  <div class="carousel-item">
    <img src="ny.jpg" alt="New York" class="d-block w-100"/>
  </div>
</div>


<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>

    </div>
  )
}

export default Services