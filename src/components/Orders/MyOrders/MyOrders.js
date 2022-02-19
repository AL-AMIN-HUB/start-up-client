import React from "react";
import Swal from "sweetalert2";
import "./MyOrders.css";

const MyOrders = ({ order }) => {
  const { userName, price, _id } = order;
  const handleClick = () => {
    Swal.fire({
      title: "Working!",
      text: "This feature is coming soon🥰",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };
  return (
    <div>
      <div className="col">
        <div style={{ cursor: "pointer" }} className="card border-0 shadow py-5 px-3 rounded-3">
          {/*  <img src={img} className="card-img-top img-fluid w-50 mx-auto" alt="..." /> */}
          <div className="card-body">
            <h6 className="card-title">
              <small>Product Id: {_id}</small>
            </h6>
            <h5 className="card-title">Product: {userName}</h5>
            <p className="card-text">Price: ${price}</p>
            <div className="d-flex justify-content-between">
              <div>
                <p className="card-text">Status: pending... </p>
              </div>
              <div>
                <button onClick={handleClick} className="mx-2 py-2 px-3 btn-1">
                  Edit
                </button>
                <button onClick={handleClick} className="mx-2 py-2 px-3 btn-1">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
