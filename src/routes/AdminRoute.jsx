import { Navigate } from "react-router";
import { useAuth } from "../auth/AuthProvider";

function AdminRoute({ children }) {

  const { user, role, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user || role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
}

export default AdminRoute;