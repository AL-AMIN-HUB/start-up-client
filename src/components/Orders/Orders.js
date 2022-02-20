import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyOrders from "./MyOrders/MyOrders";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const url = `https://machine-learning-startup.herokuapp.com/allOrders/${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [user?.email]);

  const bg = {
    background: "url(https://i.ibb.co/qxJNKn0/banner-bg1.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "200px",
  };

  return (
    <div>
      <div style={{ ...bg }} className="banner">
        <h2 className="banner-text">My Orders </h2>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {orders.map((order) => (
          <MyOrders order={order} key={order._id}></MyOrders>
        ))}
      </div>
    </div>
  );
};

export default Orders;
