import { Link } from "react-router";
import { useAuth } from "../auth/AuthProvider";

function Navbar() {

  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          BrainBeex
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">

          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link to="/competitions" className="hover:text-blue-600">
            Competitions
          </Link>

          {user && (
            <Link to="/my-applications" className="hover:text-blue-600">
              My Applications
            </Link>
          )}

          {user && (
            <Link to="/admin" className="hover:text-blue-600">
              Admin
            </Link>
          )}

          {!user ? (
            <>
              <Link to="/login" className="hover:text-blue-600">
                Login
              </Link>

              <Link
                to="/register"
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;