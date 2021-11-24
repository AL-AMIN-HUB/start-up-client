import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="login register-card ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <img
            className="img-fluid mx-auto"
            style={{ width: "100px" }}
            src="https://i.ibb.co/s6NYJLP/26-Able-to-Survive-during-the-Pandemic-Investors-Aim-for-Local-Startups-removebg-preview.png"
            alt=""
          />
          <h3 className="text-muted text-center my-3">User Registration</h3>
          <input type="text" placeholder="Full Name" {...register("name", { required: true })} />
          <input type="email" placeholder="Email Address" {...register("email", { required: true })} />
          <input type="password" placeholder="Password" {...register("password1")} />{" "}
          <input type="password" placeholder="Confirm Password" {...register("password2")} /> <input value="Create Account" type="submit" />
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
