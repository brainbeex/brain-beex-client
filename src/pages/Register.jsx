import React, { use, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { AuthContext } from "../auth/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
// import { useAuth } from "../auth/AuthProvider";

const googleProvider = new GoogleAuthProvider();

//   const { register } = useAuth();

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext)
  const [showPassword, setShowPassword] = useState(false)
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photo: "",
    password: "",
  });
  const [nameError, setNameError] = useState("")
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();

    const { name, photo, email, password } = formData;

    // Form Name Validation
    if (name.trim().length < 3) {
      setNameError("Name must be at least 3 characters long.");
      return;
    } else {
      setNameError("");
    }

    // Form Password Validation
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must include at least one uppercase letter.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("Password must include at least one lowercase letter.");
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user
        updateUser({displayName: name, photoURL: photo})
          .then(() => {
            setUser({...user, displayName: name, photoURL: photo});
            navigate("/")
          })
          .catch((error) => {
            console.log(error)
            setUser(user)
          })
        
      })
      .catch((error) => {
        const errorMessage = error.message
        setPasswordError(errorMessage);
      })
  };

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword)
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
            Signup Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-2 font-semibold text-navy">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>
            {nameError && (
              <p className="text-red-600 text-sm mt-2 text-center">{nameError}</p>
            )}

            <div>
              <label className="block mb-2 font-semibold text-navy">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-navy">Photo URL</label>
              <input
                type="text"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                placeholder="Enter photo URL"
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
                placeholder="Enter password (min 6 chars)"
                className="input input-bordered w-full"
              />
              <button 
                onClick={handleTogglePassword}
                className="btn btn-xs absolute bottom-2 right-3">
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </button>
              {passwordError && (
                <p className="text-red-600 text-sm mt-2 text-center">
                  {passwordError}
                </p>
              )}
            </div>

            <button onClick={handleSubmit} type="submit" className="btn-custom w-full font-bold">
              Register
            </button>

            <div className="text-center mt-4">
              <p className="text-navy font-semibold"> 
                Already have an account?{" "}
                <Link to="/login" className="text-amber font-semibold hover:underline">
                  Login
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

export default Register;
