import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();
  if (isLoading) {
    return (
      <div class="d-flex justify-content-center" style={{ paddingTop: "300px" }}>
        <div class="spinner-border text-success" style={{ width: "3rem", height: " 3rem" }} role="status"></div>
      </div>
    );
  }
  //
  if (user.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
