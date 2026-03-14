// import { 
//   createContext, 
//   // useContext, 
//   useEffect, 
//   useState } from "react";
  
// import {
//   // GoogleAuthProvider,
//   // signInWithPopup,
//   // createUserWithEmailAndPassword,
//   // signInWithEmailAndPassword,
//   getAuth,
//   onAuthStateChanged,
//   // signOut,
// } from "firebase/auth";

// import app from "../firebase/firebase.config";
// import axiosInstance from "../api/axiosInstance";

// // import { auth } from "../firebase/firebase.config";


// export const AuthContext = createContext();

// // const AuthContext = createContext();

// const auth = getAuth(app);

// // export const useAuth = () => useContext(AuthContext);

// // const googleProvider = new GoogleAuthProvider();


// // const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   // register
// //   const register = (email, password) =>
// //     createUserWithEmailAndPassword(auth, email, password);

// //   // login
// //   const login = (email, password) =>
// //     signInWithEmailAndPassword(auth, email, password);

// //   // google
// //   const googleLogin = () =>
// //     signInWithPopup(auth, googleProvider);

// //   // logout
// //   const logout = () => signOut(auth);

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       setUser(currentUser);
// //       setLoading(false);
// //     });

// //     return unsubscribe;
// //   }, []);

// //   const value = {
// //     user,
// //     loading,
// //     register,
// //     login,
// //     googleLogin,
// //     logout,
// //   };

// //   return (
// //     <AuthContext.Provider value={value}>
// //       {!loading && children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export default AuthProvider; 



// const AuthProvider = ({ children }) => {

//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {

//     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {

//       setUser(currentUser);

//       if (currentUser) {

//         const token = await currentUser.getIdToken();

//         const res = await axiosInstance.post("/auth/jwt", {
//           token,
//         });

//         localStorage.setItem("access-token", res.data.token);
//       }

//       setLoading(false);
//     });

//     return () => unsubscribe();

//   }, []);

//   const authInfo = {
//     user,
//     loading
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;








import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

import app from "../firebase/firebase.config";
import axiosInstance from "../api/axiosInstance";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // register
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout
  const logout = () => {
    localStorage.removeItem("access-token");
    return signOut(auth);
  };

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {

      setUser(currentUser);

      if (currentUser) {

        const token = await currentUser.getIdToken();

        const res = await axiosInstance.post("/auth/jwt", {
          token
        });

        localStorage.setItem("access-token", res.data.token);

      } else {

        localStorage.removeItem("access-token");

      }

      setLoading(false);

    });

    return () => unsubscribe();

  }, []);

  const authInfo = {
    user,
    loading,
    register,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {!loading && children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;