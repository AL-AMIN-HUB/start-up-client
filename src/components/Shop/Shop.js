import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://machine-learning-startup.herokuapp.com/products")
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
          <div key={product._id} className="col col-lg-3 col-md-4 col-12">
            <div className="card border-0 h-100 box">
              <img style={{ width: "290px", height: "360px" }} className="img-fluid img" src={product.img} alt="" />
              <div className="text-center">
                <h5 className="mt-4 mb-2">{product.name}</h5>
                <p>${product.price}</p>
                <Rating initialRating={product.rating} emptySymbol="far fa-star rating-color" fullSymbol="fas fa-star rating-color" readonly></Rating>
              </div>
              <Link style={{ textDecoration: "none" }} to={`/productsDetails/${product._id}`}>
                <button className="btn-shop">ADD TO CART</button>
              </Link>
            </div>
          </div>
        ))}
        <Stack spacing={2}>
          <Pagination count={10} variant="outlined" color="primary" />
        </Stack>
      </div>
    </div>
  );
};

export default Shop;
