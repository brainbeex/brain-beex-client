import { useContext, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const emailRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await login(email, password);
      navigate(location.state || "/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleForgetPassword = async () => {
    const email = emailRef.current.value;

    if (!email) return alert("Enter email first");

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-bgOffWhite">
      <div className="card w-full max-w-md shadow-xl bg-white">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-navy mb-6">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              ref={emailRef}
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="input input-bordered w-full"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="text-right">
              <button
                type="button"
                onClick={handleForgetPassword}
                className="text-amber text-sm"
              >
                Forgot Password?
              </button>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button type="submit" className="btn bg-amber text-navy w-full">
              Login
            </button>

            <div className="divider">OR</div>

            <button
              type="button"
              onClick={handleGoogleSignin}
              className="btn btn-outline w-full flex items-center gap-2"
            >
              <FcGoogle size={22} />
              Continue with Google
            </button>

            <p className="text-center text-sm mt-4 text-navy">
              Don’t have an account?{" "}
              <Link to="/register" className="text-amber font-semibold">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;