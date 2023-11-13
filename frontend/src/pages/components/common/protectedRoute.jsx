import React from "react";
import auth from "../../../services/authService";
import { Navigate, Outlet } from "react-router-dom";

// Renders child routes ('<Outlet>') if authenticated
//  or redirects to login page if not
const ProtectedRoute = () => {
  const verif = auth.verifyToken();
  return verif ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
