import React from "react";
import { useState, useEffect } from "react";
// import style from '/style.css'
function Productes() {
  const [categories, setCategories] = useState([]);
  const [Productes ,setProducts] = useState([])
  function LoadCategories() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((responce) => responce.json())
      .then((data) => {
        data.unshift("all");
        setCategories(data);
      });
  }
  function LoadProductes(url) {
    fetch(url)
      .then((responce) => responce.json())
      .then((data) => {
        setProducts(data);
      });
  }
  useEffect(() => {
    LoadCategories();
    LoadProductes("https://fakestoreapi.com/products");
  }, []);

  return (
    <div className="container-fluid">
      <header className="bg-danger text-white text-enter p-2">
        <h2>
          {" "}
          <span className="bi bi-cart"></span>Shopping Online
        </h2>
      </header>
      <section className="row mt-2">
        <nav className="col-6">
          <h3>Select Category</h3>
          <select className="form-select">
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </nav>
        <main className="col-9">
          <div className="">
            {Productes.map((Product) => (
              
              <div className="container  w-50">
  <div className="row  " >
    <div className="col-md-6">
      <div className="card d-flex flex-warp">
        <img src={Product.image} className="card-img-top" alt="Product Image" />
        <div className="card-header">
          <p>{Product.title}</p>
        </div>
        <div className="card-body">
          <dl>
            <dt>Price</dt>
            <dd>{Product.price}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
      <style/>

</div>

            ))}
          </div>
        </main>
      </section>
    </div>
  );
}

export default Productes;
