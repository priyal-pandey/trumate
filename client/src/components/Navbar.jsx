import { useNavigate } from "react-router-dom";

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="bg-white px-8 py-4 flex justify-between items-center shadow-sm">

      {/* Brand */}
      <h1
        onClick={() => navigate("/")}
        className="text-2xl font-bold text-[#b19081] tracking-wide cursor-pointer"
      >
        TruMate
      </h1>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {user ? (
          <>
            <span className="text-sm text-gray-600">
              Hi, {user.name}
            </span>

            <button
              onClick={() => navigate("/dashboard")}
              className="text-gray-600 hover:text-[#b19081] transition"
            >
              Dashboard
            </button>

            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-[#b19081] text-white rounded-lg hover:opacity-90 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="text-gray-600 hover:text-[#b19081] transition"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="px-4 py-2 bg-[#b19081] text-white rounded-lg hover:opacity-90 transition"
            >
              Signup
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default Navbar;