import { Outlet, NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="bg-bgWhite min-h-screen flex flex-col">

      {/* Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="flex flex-1">

        {/* Left Sidebar */}
        <aside className="hidden lg:block w-64 bg-bgOffWhite border-r border-borderGray p-5">

          <ul className="space-y-4 text-textMain">

            <li className="font-semibold text-navy">
              Explore
            </li>

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-navy font-semibold"
                    : "hover:text-navy"
                }
              >
                🏠 Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/competitions"
                className={({ isActive }) =>
                  isActive
                    ? "text-navy font-semibold"
                    : "hover:text-navy"
                }
              >
                🏆 Competitions
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/my-applications"
                className={({ isActive }) =>
                  isActive
                    ? "text-navy font-semibold"
                    : "hover:text-navy"
                }
              >
                📝 My Applications
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/admin"
                className={({ isActive }) =>
                  isActive
                    ? "text-navy font-semibold"
                    : "hover:text-navy"
                }
              >
                📊 Dashboard
              </NavLink>
            </li>

          </ul>

        </aside>

        {/* Content */}
        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default MainLayout;