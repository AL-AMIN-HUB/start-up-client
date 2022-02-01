import React from "react";
import "./Yearly.css";
import { Link } from "react-router-dom";

const Yearly = () => {
  return (
    <div className="row">
      <div className="card border-0 col-md-4 col-12">
        <div className=" yearly py-5 g-4 shadow-sm rounded-3">
          <div className="text-center mb-4">
            <h5>Free</h5>
            <p>
              <small>
                Get your business up <br /> and running
              </small>
            </p>
            <h2>
              <b>$ 0</b>/y
            </h2>
            <Link className="text-decoration-none" to="/">
              <button className="my-2 my-md-0 btn px-4 py-2 price-btn">Get Started Free</button>
            </Link>
          </div>
          <div>
            <li className="list-unstyled pricing-check text-muted">
              <small>Drag & Drop Builder</small>
            </li>{" "}
            <li className="list-unstyled pricing-check text-muted">
              <small>Lead Generation & Sales</small>
            </li>{" "}
            <li className="list-unstyled pricing-check text-muted">
              <small>Boot & Digital Assistants</small>
            </li>{" "}
            <li className="list-unstyled pricing-check text-muted">
              <small>Customer Service</small>
            </li>{" "}
            <li className="list-unstyled pricing-minus text-muted">
              <small>
                <del>Up to 1000 Subscribers</del>
              </small>
            </li>{" "}
            <li className="list-unstyled pricing-minus text-muted">
              <small>
                <del>Unlimited Broadcasts</del>
              </small>
            </li>{" "}
            <li className="list-unstyled pricing-minus text-muted">
              <small>
                <del>Landing Pages & Web Widgets</del>
              </small>
            </li>
          </div>
        </div>
      </div>
      <div className="card border-0 col-md-4 col-12">
        <div className=" yearly py-5 g-4 shadow-sm rounded-3">
          <div className="text-center mb-4">
            <h5>Standard</h5>
            <p>
              <small>
                Get your business up <br /> and running
              </small>
            </p>
            <h2>
              <b>$ 379</b>/y
            </h2>
            <Link className="text-decoration-none" to="/">
              <button className="my-2 my-md-0 btn px-4 py-2 price-btn">Start 3 Days Free Trial</button>
            </Link>
          </div>
          <div>
            <li className="list-unstyled pricing-check text-muted">
              <small>Drag & Drop Builder</small>
            </li>{" "}
            <li className="list-unstyled pricing-check text-muted">
              <small>Lead Generation & Sales</small>
            </li>{" "}
            <li className="list-unstyled pricing-check text-muted">
              <small>Boot & Digital Assistants</small>
            </li>{" "}
            <li className="list-unstyled pricing-check text-muted">
              <small>Customer Service</small>
            </li>{" "}
            <li className="list-unstyled pricing-check text-muted">
              <small>Up to 1000 Subscribers</small>
            </li>{" "}
            <li className="list-unstyled pricing-check text-muted">
              <small>Unlimited Broadcasts</small>
            </li>{" "}
            <li className="list-unstyled pricing-minus text-muted">
              <small>
                <del>Landing Pages & Web Widgets</del>
              </small>
            </li>
          </div>
        </div>
      </div>
      <div className="card border-0 col-md-4 col-12">
        <div className="yearly py-5 g-4 shadow-sm rounded-3">
          <div className="text-center mb-4">
            <h5>Premium</h5>
            <p>
              <small>
                Get your business up <br /> and running
              </small>
            </p>
            <h2>
              <b>$ 599</b>/y
            </h2>
            <Link className="text-decoration-none" to="/">
              <button className="my-2 my-md-0 btn px-4 py-2 price-btn">Start 6 Days Free Trial</button>
            </Link>
          </div>
          <div>
            <li className="list-unstyled pricing-check text-muted">
              <small>Drag & Drop Builder</small>
            </li>{" "}
            <li className="list-unstyled pricing-check text-muted">
              <small>Lead Generation & Sales</small>
            </li>{" "}
            <li className="list-unstyled pricing-check text-muted">
              <small>Boot & Digital Assistants</small>
            </li>{" "}
            <li className="list-unstyled pricing-check text-muted">
              <small>Customer Service</small>
            </li>{" "}
            <li className="list-unstyled pricing-check text-muted">
              <small>Up to 1000 Subscribers</small>
            </li>{" "}
            <li className="list-unstyled pricing-check text-muted">
              <small>Unlimited Broadcasts</small>
            </li>{" "}
            <li className="list-unstyled pricing-check text-muted">
              <small>Landing Pages & Web Widgets</small>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yearly;
