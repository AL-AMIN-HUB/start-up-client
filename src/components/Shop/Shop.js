import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://lit-woodland-97376.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const bg = {
    background: "url(https://i.ibb.co/qxJNKn0/banner-bg1.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "300px",
  };
  return (
    <div>
      <div style={{ ...bg }} className="banner">
        <h2 className="banner-text">Products</h2>
      </div>

      <div className="container row g-4 mx-auto py-5">
        {products.map((product) => (
          <div key={product.id} className="col col-lg-3 col-md-4 col-12">
            <div className="card border-0 h-100 box">
              <img className="img-fluid img" src={product.img} alt="" />
              <div className="text-center">
                <h5 className="mt-4 mb-2">{product.name}</h5>
                <p>${product.price}</p>
                <Rating initialRating={product.rating} emptySymbol="far fa-star rating-color" fullSymbol="fas fa-star rating-color" readonly></Rating>
              </div>
              <button className="btn-shop">ADD TO CART</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
