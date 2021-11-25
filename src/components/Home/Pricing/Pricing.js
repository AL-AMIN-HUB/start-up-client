import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="my-5 py-5">
      <div>
        <div className="text-center pb-5">
          <p style={{ background: "#F5DFFD", width: "150px", borderRadius: "30px" }} className=" py-1 px-2 mx-auto">
            <small>Pricing plan</small>
          </p>
          <h2>Our Pricing Plan</h2>
          <div className="serviceLine">
            <div className="lineAnimation"></div>
          </div>
          <p className="text-muted">
            A price plan is a set of instructions that computes the amount of a charge. <br /> A price plan is represented by a rating tree.
          </p>
        </div>
        <div className="text-center pb-5 mb-4">
          <Link className="text-decoration-none" to="/month">
            <button className="button1">Monthly Plan</button>
          </Link>

          <Link className="text-decoration-none" to="/year">
            <button className="button2">Yearly Plan</button>
          </Link>
        </div>
        <div className="container mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
