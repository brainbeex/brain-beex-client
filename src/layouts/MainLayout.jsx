import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="bg-bgWhite min-h-screen flex flex-col">

      {/* Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="flex flex-1">

        {/* Left Sidebar (Desktop only) */}
        <aside className="hidden lg:block w-64 bg-bgOffWhite border-r border-borderGray p-5">
          <ul className="space-y-4 text-textMain">
            <li className="font-semibold text-navy">Explore</li>
            <li>🏠 Home</li>
            <li>🏆 Competitions</li>
            <li>📝 My Applications</li>
            <li>📊 Dashboard</li>
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