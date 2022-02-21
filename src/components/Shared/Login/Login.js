import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { googleSignIn, githubSignIn } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const location = useLocation();
  const navigate = useNavigate();
  const handleGoogleButton = () => {
    googleSignIn(navigate, location);
  };

  const bg = {
    background:
      "url(https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F4357049%2Fde0bcb471b4c596efff161108f0ee76f%2Ftopic.jpg?generation=1595314580690707&alt=media)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div style={{ ...bg, height: "100vh" }}>
      <div className="login history-card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <img
            className="img-fluid mx-auto"
            style={{ width: "100px" }}
            src="https://i.ibb.co/s6NYJLP/26-Able-to-Survive-during-the-Pandemic-Investors-Aim-for-Local-Startups-removebg-preview.png"
            alt=""
          />
          <h3 className="text-muted text-center my-3">User Login</h3>
          <p className="text-center text-danger fw-bold">Please sign in google/github now</p>
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
          <button onClick={handleGoogleButton} className="btn btn-outline-light py-3 px-4 shadow-sm me-2">
            {" "}
            <img
              className="img-fluid"
              style={{ width: "25px", margin: "0 5px" }}
              src="https://w7.pngwing.com/pngs/882/225/png-transparent-google-logo-google-logo-google-search-icon-google-text-logo-business.png"
              alt=""
            />{" "}
            Google
          </button>{" "}
          <button onClick={githubSignIn} className="btn btn-outline-light py-3 px-4 shadow-sm ms-2">
            {" "}
            <img
              className="img-fluid"
              style={{ width: "25px", margin: "0 5px" }}
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
