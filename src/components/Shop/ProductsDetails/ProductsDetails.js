import React, { useState, useEffect } from "react";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";

const ProductsDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `https://machine-learning-startup.herokuapp.com/products/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [productId]);

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
        <h2 className="banner-text">Your Product Cart</h2>
      </div>
      <div style={{ padding: "50px" }} className="container">
        <div className="row ">
          <div className="col-12 col-md-7 text-center">
            {" "}
            <img className="img-fluid mb-5 mb-md-0 w-50" src={product.img} alt="" />
          </div>
          <div className="col-12 col-md-5">
            <h3 className="fw-bold">{product.name}</h3>
            <div className="serviceLine">
              <div className="lineAnimation"></div>
            </div>
            <p style={{ textAlign: "justify" }} className="mt-3">
              <small className="text-muted">
                If you’re a marketer who is looking to brush up on all things branding related, then we have good news. There’s a wealth of
                ultra-helpful, current, and free content that can be accessed anytime, anywhere – even when you’re far away from your office. These
                days, many branding blogs are offering up valuable information on all aspects of the branding universe, including everything from
                cutting-edge digital solutions to branding strategy development and brand positioning, expert insights on leveraging brand assets,
                product reviews, and more.
              </small>
            </p>
            <h3 className="mt-5 ">$ {product.price}</h3>
            <div>
              <p>
                Quantity: <input className="text-center w-25" type="number" defaultValue={1} />
              </p>
              <Rating initialRating={product.rating} emptySymbol="far fa-star rating-color" fullSymbol="fas fa-star rating-color" readonly></Rating>
            </div>
            <Link style={{ textDecoration: "none" }} to={`/orderPlace/${product._id}`}>
              <button className="btn btn-danger mt-3">Purchase Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
