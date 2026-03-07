// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useAuth } from "./provider/AuthProvider";

function App() {
  const App = () => {
  const { user } = useAuth();

  return <h1>{user ? user.email : "Not logged in"}</h1>;
};

}

export default App





