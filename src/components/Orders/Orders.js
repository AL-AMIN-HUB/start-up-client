import React, { useEffect, useState } from "react";

const Orders = () => {
  const [order, setOrder] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  return (
    <div>
      <p>{order.name}</p>
    </div>
  );
};

export default Orders;
