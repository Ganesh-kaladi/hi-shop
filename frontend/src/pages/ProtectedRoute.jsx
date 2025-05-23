import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isAuthenticated, token } = useSelector((state) => state.auth);
  console.log(!isAuthenticated);

  if (!token) return <Navigate to="/login" replace />;

  return children;
}

export default ProtectedRoute;
