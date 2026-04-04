import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup({ setUser }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    age: "",
    gender: "",
    college: ""
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
      await axios.post("http://localhost:5000/api/auth/register", form);

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: form.email,
          password: form.password
        }
      );

      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/dashboard");

    } catch (err) {
      console.error(err);
      alert("Error signing up");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#0A0A0A] px-4 text-white">

      <div className="w-full max-w-lg bg-[#111111] rounded-2xl p-8 border border-[#262626] shadow-[0_0_25px_rgba(99,102,241,0.15)]">

        <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-[#6366F1] to-[#14B8A6] bg-clip-text text-transparent">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="grid gap-4">

          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#0A0A0A] border border-[#262626] rounded-lg text-white placeholder-[#71717A] focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
          />

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#0A0A0A] border border-[#262626] rounded-lg text-white placeholder-[#71717A] focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#0A0A0A] border border-[#262626] rounded-lg text-white placeholder-[#71717A] focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
          />

          <input
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#0A0A0A] border border-[#262626] rounded-lg text-white placeholder-[#71717A] focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
          />

          <input
            name="age"
            type="number"
            placeholder="Age"
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#0A0A0A] border border-[#262626] rounded-lg text-white placeholder-[#71717A] focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
          />

          <select
            name="gender"
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#0A0A0A] border border-[#262626] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
          >
            <option value="" className="text-black">Select Gender</option>
            <option value="Male" className="text-black">Male</option>
            <option value="Female" className="text-black">Female</option>
            <option value="Other" className="text-black">Other</option>
          </select>

          <input
            name="college"
            placeholder="College"
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#0A0A0A] border border-[#262626] rounded-lg text-white placeholder-[#71717A] focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
          />

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#14B8A6] text-black font-medium hover:opacity-90 transition shadow-[0_0_15px_rgba(99,102,241,0.25)]"
          >
            Signup
          </button>

        </form>

        <p className="text-sm text-center mt-4 text-[#A1A1AA]">
          Already have an account?{" "}
          <span
            className="text-[#6366F1] cursor-pointer hover:text-[#14B8A6] transition"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default Signup;