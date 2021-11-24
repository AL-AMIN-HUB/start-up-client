import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center">
      <img
        className="img-fluid mx-auto d-block"
        src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"
        alt=""
      />
      <button className="btn btn-warning">
        <Link className="text-decoration-none text-dark" to="/home">
          Back to home
        </Link>
      </button>
    </div>
  );
};

export default Error;
