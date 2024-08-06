import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-3'>
          <div className='card'>
            <img src="img2.png" alt="hi" className='card-img-top w-50' />
            <div className='card-body'>
              <div className='title bg-info'>
                <p>Bootstrap</p>  
              </div>
              <div className='bg-primary text-white p-3'>
                <p>React Js is a JavaScript front-end library for developing reusable components. Compared to other libraries and frameworks, it is fast and efficient.</p>
              </div>
              <div className='card-footer'>
                <button className='btn btn-success text-white'>Search Items</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
