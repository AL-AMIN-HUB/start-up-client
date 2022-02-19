import React, { useEffect, useState } from "react";
import MyOrders from "./MyOrders/MyOrders";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  console.log(orders);

  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      {orders.map((order) => (
        <MyOrders order={order} key={order._id}></MyOrders>
      ))}
    </div>
  );
};

export default Orders;
