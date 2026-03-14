// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import app from "../firebase/firebase.config";

// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// function Login() {

//   const handleLogin = async () => {

//     try {

//       await signInWithPopup(auth, provider);

//     } catch (error) {
//       console.log(error);
//     }

//   };

//   return (
//     <div className="flex justify-center items-center h-screen">

//       <button
//         onClick={handleLogin}
//         className="bg-blue-500 text-white px-6 py-3 rounded"
//       >
//         Login with Google
//       </button>

//     </div>
//   );
// }

// export default Login;




import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../auth/AuthProvider";

function Login() {

  const { login } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await login(email, password);

      navigate("/");

    } catch (error) {

      alert(error.message);

    }

  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;