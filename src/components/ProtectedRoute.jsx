import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, checkAuth } = useAuth();

  if (!user && !checkAuth()) {
    return <Navigate to="/register" replace />;
  }

  return children;
};

export default ProtectedRoute;
