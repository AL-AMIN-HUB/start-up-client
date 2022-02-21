import axios from "axios";
import React, { useEffect, useState } from "react";
import "./OrderPlace.css";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const OrderPlace = () => {
  const { user } = useAuth();
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  //
  useEffect(() => {
    const url = `https://machine-learning-startup.herokuapp.com/products/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [productId]);

  //
  const onSubmit = (data) => {
    // console.log(data);
    delete data._id;
    // post order
    axios.post("https://machine-learning-startup.herokuapp.com/orders", data).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          text: "We have received your order. You can see your order on the dashboard",
          title: "Your order has been pending",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/allOrders");
      }
    });
    reset();
  };
  return (
    <div className="OrderBody">
      <div className="login register-card ">
        <h3 className="text-muted text-center my-3">Order Information</h3>
        <form style={{ margin: "0 auto" }} onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue={product.name} type="text" {...register("userName", { required: true })} />
          <input placeholder="Email" defaultValue={user?.email} type="email" {...register("email")} />
          <input defaultValue={product.price} type="number" {...register("price", { required: true })} />
          <input defaultValue={product.img} {...register("img")} />
          <input placeholder="Phone Number" type="text" {...register("phone", { required: true })} />{" "}
          <textarea className="textarea" placeholder="Your Address" type="text" {...register("address", { required: true })} />
          <input className="inputSubmit" style={{ border: "none", background: "#EC5990", color: "white" }} value="Order Now" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default OrderPlace;
