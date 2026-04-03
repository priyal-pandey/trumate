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


// function App() {
//   return (
//     <div className="min-h-screen bg-[#f7efe5] text-[#1f1f1f] p-6">

//       {/* Navbar */}
//       <div className="flex justify-between items-center mb-10 px-8 py-4 bg-white rounded-xl shadow-sm">
        
//         {/* BRAND */}
//         <h1 className="text-2xl font-bold text-[#b19081] tracking-wide">
//           TruMate
//         </h1>

//         <div className="flex gap-3 items-center">
//           <button className="text-gray-600 hover:text-[#b19081] transition">
//             Login
//           </button>

//           <button className="px-4 py-2 bg-[#b19081] text-white rounded-lg hover:opacity-90 transition">
//             Signup
//           </button>
//         </div>
//       </div>

//       {/* Card */}
//       <div className="max-w-md p-6 bg-white rounded-xl 
//         shadow-[6px_6px_0px_rgba(177,144,129,0.35)]">

//         <h2 className="text-xl font-semibold mb-1">
//           Cozy Room Near Campus
//         </h2>

//         <p className="text-gray-500 mb-3">Pune • ₹8000</p>

//         <p className="mb-4 text-sm leading-relaxed">
//           Looking for a clean, friendly roommate. Chill environment and close to college.
//         </p>

//         <div className="flex justify-between items-center">

//           {/* Tags */}
//           <div className="flex gap-2 flex-wrap">
//             <span className="text-xs bg-[#ead58f] px-3 py-1 rounded-full">
//               Shared
//             </span>

//             <span className="text-xs bg-[#b8d8d8] px-3 py-1 rounded-full">
//               Verified
//             </span>

//             <span className="text-xs bg-[#e8b4b8] px-3 py-1 rounded-full">
//               Female Preferred
//             </span>
//           </div>

//           {/* Button */}
//           <button className="px-4 py-2 bg-[#b19081] text-white rounded-lg hover:opacity-90 transition">
//             Interested
//           </button>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default App;