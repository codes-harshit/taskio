import React from "react";
import { useAuth } from "../store/auth.store";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { authUser, isGettingUser } = useAuth();

  if (isGettingUser) return <div>Loading...</div>;

  return authUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;
