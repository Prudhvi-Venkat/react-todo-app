import React from "react";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm"
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer"
import Profile from "./components/Profile";

function App() {

  return (
    <div className="justify-center min-h-screen space-y-8 dark:bg-gray-400">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Navigate to="/login" replace />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/register" element={<SignupForm />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
