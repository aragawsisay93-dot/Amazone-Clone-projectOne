import { Navigate } from "react-router-dom";

const PublicRoute = ({ user, children }) => {
  // If user is logged in, redirect to home
  if (user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default PublicRoute;
