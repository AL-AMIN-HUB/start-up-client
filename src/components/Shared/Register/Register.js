import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const { registerUser } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    if (data.password1 !== data.password2) {
      window.confirm("Your password is incorrect,, please enter your correct password");
    }
    registerUser(data.email, data.password, data.name);
    reset();
  };
  const bg = {
    background: "url(https://cdn.analyticsvidhya.com/wp-content/uploads/2019/11/chi-square-scaled.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={{ ...bg, height: "100vh" }}>
      <div className="login register-card ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <img
            className="img-fluid mx-auto"
            style={{ width: "100px" }}
            src="https://i.ibb.co/s6NYJLP/26-Able-to-Survive-during-the-Pandemic-Investors-Aim-for-Local-Startups-removebg-preview.png"
            alt=""
          />
          <h3 className="text-muted text-center my-3">User Registration</h3>
          <input name="name" type="text" placeholder="Full Name" {...register("name", { required: true })} />
          <input name="email" type="email" placeholder="Email Address" {...register("email", { required: true })} />
          <input name="password1" type="password" placeholder="Password" {...register("password1")} />{" "}
          <input name="password2" type="password" placeholder="Confirm Password" {...register("password2")} />{" "}
          <input value="Create Account" type="submit" />
        </form>
        <p className="lead text-center mt-3">
          <span className="para"> Already have an Account?</span>
          <Link className="text-decoration-none fs-6 ms-2" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
