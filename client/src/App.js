import React from "react";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer"

function App() {

  return (
    <div className="justify-center min-h-screen space-y-8 dark:bg-gray-400">
      <Navbar />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default App;
