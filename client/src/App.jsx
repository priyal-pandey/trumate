import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false); //  DONE LOADING
  }, []);

  // IMPORTANT: Wait before rendering routes
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Navbar user={user} setUser={setUser} />

      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
    path="/login"
    element={
      user ? <Navigate to="/dashboard" /> : <Login setUser={setUser} />
    }
  />

        <Route
    path="/signup"
    element={
      user ? <Navigate to="/dashboard" /> : <Signup setUser={setUser} />
    }
  />

         <Route
    path="/dashboard"
    element={
      user ? (
        <Dashboard user={user} setUser={setUser} />
      ) : (
        <Navigate to="/login" />
      )
    }
  />
      </Routes>
    </>
  );
}

export default App;