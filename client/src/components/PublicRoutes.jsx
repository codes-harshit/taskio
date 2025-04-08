// components/PublicRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth.store";

const PublicRoutes = ({ children }) => {
  const { authUser, isGettingUser } = useAuth();

  if (isGettingUser) return <div>Loading...</div>;

  return authUser ? <Navigate to="/" /> : children;
};

export default PublicRoutes;
