import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="login history-card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <img
            className="img-fluid mx-auto"
            style={{ width: "100px" }}
            src="https://i.ibb.co/s6NYJLP/26-Able-to-Survive-during-the-Pandemic-Investors-Aim-for-Local-Startups-removebg-preview.png"
            alt=""
          />
          <h3 className="text-muted text-center my-3">User Login</h3>
          <input type="email" placeholder="Email Address" {...register("email", { required: true })} />
          <input type="password" placeholder="Password" {...register("password")} /> <input value="Click to login" type="submit" />
        </form>
        <p className="lead text-center mt-3">
          <span className="para"> Create New Account?</span>
          <Link className="text-decoration-none fs-6 ms-2" to="/register">
            Register Now
          </Link>
        </p>
        <p className="other-login para fs-5 text-center">------------- Or SignIn With -------------</p>
        <div className="text-center">
          <button className="btn btn-outline-light py-3 px-4 shadow-sm me-2">
            {" "}
            <img
              className="img-fluid"
              style={{ width: "30px", margin: "0 5px" }}
              src="https://w7.pngwing.com/pngs/882/225/png-transparent-google-logo-google-logo-google-search-icon-google-text-logo-business.png"
              alt=""
            />{" "}
            Google
          </button>{" "}
          <button className="btn btn-outline-light py-3 px-4 shadow-sm ms-2">
            {" "}
            <img
              className="img-fluid"
              style={{ width: "30px", margin: "0 5px" }}
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt=""
            />{" "}
            Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
