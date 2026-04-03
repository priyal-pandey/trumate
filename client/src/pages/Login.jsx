import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/dashboard");

    } catch (err) {
      console.error(err);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f7efe5] to-[#efe0d2] px-4">

      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-[10px_10px_0px_rgba(177,144,129,0.25)] border border-[#eadccf]">

        <h2 className="text-2xl font-bold text-center text-[#b19081] mb-6">
          Login to Trumate
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b19081]"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b19081]"
          />

          <button
            type="submit"
            className="w-full bg-[#b19081] text-white py-2 rounded-lg shadow hover:opacity-90 transition"
          >
            Login
          </button>

        </form>

        <p className="text-sm text-center mt-4 text-gray-500">
          Don’t have an account?{" "}
          <span
            className="text-[#b19081] cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Signup
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;