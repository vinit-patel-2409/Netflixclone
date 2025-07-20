import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import { auth } from "./firebase"; // Importing the Firebase auth instance
 import { onAuthStateChanged } from "firebase/auth";
 import { ToastContainer, toast } from 'react-toastify';
 

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, you can access user details here
        console.log("Logged in");
        navigate("/"); // Redirect to home page if user is logged in
      } else {
        // User is signed out
        console.log("Logged out");
        navigate("/login"); // Redirect to login page if user is not logged in
      }
    });
  }, []);
  return (
    <div>
      <ToastContainer theme="dark"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player/>}/>
      </Routes>
    </div>
  );
};

export default App;
