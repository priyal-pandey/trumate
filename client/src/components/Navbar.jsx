import { useNavigate } from "react-router-dom";

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="bg-[#0A0A0A] px-8 py-4 flex justify-between items-center border-b border-[#262626]">

      {/* Brand */}
      <h1
        onClick={() => navigate("/")}
        className="text-2xl font-bold bg-gradient-to-r from-[#6366F1] to-[#14B8A6] bg-clip-text text-transparent tracking-wide cursor-pointer"
      >
        TruMate
      </h1>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {user ? (
          <>
            <span className="text-sm text-[#A1A1AA]">
              Hi, {user.name}
            </span>

            <button
              onClick={() => navigate("/dashboard")}
              className="text-[#A1A1AA] hover:text-[#6366F1] transition"
            >
              Dashboard
            </button>

            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#14B8A6] text-black hover:opacity-90 transition shadow-[0_0_15px_rgba(99,102,241,0.25)]"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="text-[#A1A1AA] hover:text-[#6366F1] transition"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#14B8A6] text-black hover:opacity-90 transition shadow-[0_0_15px_rgba(20,184,166,0.2)]"
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