import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

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

  // handleClick button
  const handleClick = () => {
    Swal.fire({
      title: "Working!",
      text: "This feature is coming soon🥰",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  //
  const handleDelete = (id) => {
    const confirm = window.confirm("Are You Sure? You are going to cancel your order");
    if (confirm) {
      axios.delete(`https://machine-learning-startup.herokuapp.com/allOrders/${id}`).then((res) => {
        if (res.data.deletedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Order has been Cancelled Successfully",
            showConfirmButton: false,
            timer: 2000,
          });
        }
        window.location.reload();
      });
    }
  };
  return (
    <div>
      <div style={{ ...bg }} className="banner">
        <h2 className="banner-text">My Orders </h2>
      </div>
      <div className="orders">
        {orders.length ? (
          <div className="container py-5">
            <Table striped bordered hover responsive>
              <thead>
                <tr className="text-center">
                  <th>Products</th>
                  <th>Ordered By</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Action</th>
                  <th>Price</th>
                </tr>
              </thead>
              {orders.map((order) => (
                <tbody key={order._id} className="text-center border-1">
                  <tr className="py-5 bg-white text-white">
                    <td>
                      <div className="d-flex align-items-center justify-content-around">
                        <img
                          style={{
                            height: "45px",
                            width: "45px",
                            borderRadius: "50%",
                            marginLeft: "3px",
                          }}
                          src={order.img}
                          alt=""
                        />
                        {order.userName}
                      </div>
                    </td>
                    <td>{user.displayName}</td>
                    <td>{order.email}</td>
                    {order.status === "Approved" ? (
                      <td>
                        <span
                          style={{
                            color: "white",
                            backgroundColor: "#1AAA55",
                            margin: "0px",
                            padding: "5px 8px",
                            borderRadius: "3px",
                          }}
                        >
                          {/* {order.status} */}
                          pending...
                        </span>
                      </td>
                    ) : (
                      <td>
                        <span
                          style={{
                            color: "white",
                            backgroundColor: "#1AAA55",
                            margin: "0",
                            display: "inline-block",
                            padding: "5px 8px",
                            borderRadius: "3px",
                          }}
                        >
                          {/* {order.status} */}
                          pending...
                        </span>
                      </td>
                    )}
                    <td>
                      <button className="btn-1 px-3 py-1 mx-2" onClick={handleClick}>
                        Edit
                      </button>{" "}
                      <button className="btn-1 px-3 py-1 mx-2" onClick={() => handleDelete(order._id)}>
                        Delete
                      </button>
                    </td>
                    <td>
                      <span className="fw-bold">${order.price}</span>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </div>
        ) : (
          <>
            <h2 className=" py-5">
              You have <span className="text-danger fw-bold">0</span> Orders
            </h2>
            <p className="lead">
              Please go to <span className="text-muted fw-bold">shipping</span> and choice your product.. Then place order.. Thank you
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Orders;
