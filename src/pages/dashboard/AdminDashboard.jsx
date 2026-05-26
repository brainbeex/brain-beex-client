import { useAuth } from "../../auth/AuthProvider";
import { Link } from "react-router-dom";

const AdminDashboard = () => {

  const { user, role } = useAuth();

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">
        Admin Dashboard
      </h1>

      <p>
        <strong>Email:</strong> {user?.email}
      </p>

      <p>
        <strong>Role:</strong> {role}
      </p>

      <div className="mt-6 grid gap-4">

        <Link
          to="/dashboard/create-competition"
          className="btn btn-primary"
        >
          Create Competition
        </Link>

        <Link
          to="/dashboard/manage-competitions"
          className="btn btn-secondary"
        >
          Manage Competitions
        </Link>

        <Link
          to="/dashboard/applications"
          className="btn btn-accent"
        >
          View Applications
        </Link>

      </div>

    </div>
  );

};

export default AdminDashboard;