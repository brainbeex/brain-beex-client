import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="bg-bgOffWhite border-b border-borderGray sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          {/* <Link to="/" className="text-2xl font-bold text-navy">
            Brain<span className="text-amber">Beex</span>
          </Link> */}


          {/* Responsive (Mobile) menu button */}
          <div className="md:hidden">
            <input type="checkbox" id="mobile-menu-toggle" className="hidden peer" />
            <label htmlFor="mobile-menu-toggle" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>

            {/* Responsive (Mobile) dropdown menu */}
            <div className="peer-checked:block hidden absolute left-4 top-16 bg-base-100 w-56 p-4 rounded-lg shadow">
              <div className="flex flex-col space-y-2">
                <Link to="/" className="btn-custom-nav-menu">Platform</Link>
                <Link to="/competitions" className="btn-custom-nav-menu">Competitions</Link>
                <Link to="/about" className="btn-custom-nav-menu">About Us</Link>
                <Link to="/blog" className="btn-custom-nav-menu">Blog</Link>
                <Link to="/contact" className="btn-custom-nav-menu">Contact</Link>

                <Link
                  to="/register"
                  className="btn-custom"
                >
                  Join Now
                </Link>

              </div>
            </div>
          </div>



          <Link to="/" className="">
            <img
              src="https://i.ibb.co.com/tPFbLdP3/BG.png"
              alt="Logo Image"
              // className="h-56 w-full object-cover rounded-t-2xl"
              className="h-9 w-36 object-cover"

            />
          </Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2 text-textMain">


            <Link to="/" className="btn-custom-nav-menu">Platform</Link>
            <Link to="/competitions" className="btn-custom-nav-menu">Competitions</Link>
            <Link to="/about" className="btn-custom-nav-menu">About Us</Link>
            <Link to="/blog" className="btn-custom-nav-menu">Blog</Link>
            <Link to="/contact" className="btn-custom-nav-menu">Contact</Link>

          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">

            {!user ? (
              <>
                {/* <Link
                  to="/login"
                  // className="btn btn-outline bg-amber text-navy hover:bg-navy hover:text-amber"
                  className="btn-custom"
                >
                  Login
                </Link>  */}

                <Link
                  to="/register"
                  className="btn-custom"
                >
                  Join Now
                </Link>
              </>
            ) : (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} className="avatar cursor-pointer">
                  <div className="w-10 rounded-full">
                    <img
                      src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                      alt="profile"
                    />
                  </div>
                </div>

                <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52">
                  <li>
                    <Link to="/my-applications">My Applications</Link>
                  </li>
                  <li>
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li>
                    <button onClick={logout}>Logout</button>
                  </li>
                </ul>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};

export default Navbar;