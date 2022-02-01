import React from "react";
import Rating from "react-rating";

const SingleProduct = ({ product }) => {
  return (
    <div className="col col-lg-3 col-md-4 col-12">
      <div className="card border-0 h-100 box">
        <img className="img-fluid img" src={product.img} alt="" />
        <div className="text-center">
          <h5 className="mt-4 mb-2">{product.name}</h5>
          <p>${product.price}</p>
          <Rating initialRating={product.rating} emptySymbol="far fa-star rating-color" fullSymbol="fas fa-star rating-color" readonly></Rating>
        </div>
        <button className="btn-shop">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
