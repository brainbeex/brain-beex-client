import React, { use, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../auth/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getAuth, GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const Login = () => {
  const { userSignin } = use(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ email: "", password: "" });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userSignin(email, password)
      .then((result) => {
        const user = result.user;
        navigate(`${location.state ? location.state : "/"}`)
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode)
      })

  };

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword)
  }

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("change Your email password")
      })
      .catch(() => {
        console.log("Error")
      })
  }

  const handleGoogleSignin = () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-navy mb-6">
            Login Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-2 font-semibold text-navy">Email</label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>

            <div className="relative">
              <label className="block mb-2 font-semibold text-navy">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="input input-bordered w-full"
              />
              <button 
                onClick={handleTogglePassword}
                className="btn btn-xs absolute bottom-2 right-3">
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </button>
            </div>

            <div 
              onClick={handleForgetPassword}
              className="text-right">
              <a href="#" className="text-amber text-sm font-semibold hover:underline">
                Forget Password?
              </a>
            </div>

            {error && (
              <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
            )}

            <button type="submit" className="btn-custom w-full font-bold">
              Log In
            </button>

            <div className="text-center mt-4">
              <p className="text-navy font-semibold">
                Don't have an account?{" "}
                <Link to="/register" className="text-amber font-semibold hover:underline">
                  Join Now
                </Link>
              </p>
            </div>

            <div className="divider">or</div>

            <button 
              onClick={handleGoogleSignin}
              className="btn-custom-google"> <FcGoogle size={24}></FcGoogle>
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;