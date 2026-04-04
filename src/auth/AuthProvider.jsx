
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
  const [role, setRole] = useState(null);
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
          idToken: token,
        });

        localStorage.setItem("access-token", res.data.token);

        // ✅ Decode role from JWT response
        setRole(res.data?.role || "user"); // fallback

      } else {

        localStorage.removeItem("access-token");

      }

      setLoading(false);

    });

    return () => unsubscribe();

  }, []);

  const authInfo = {
    user,
    role,
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