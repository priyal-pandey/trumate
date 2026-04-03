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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f7efe5] to-[#efe0d2] px-4">

      <div className="w-full max-w-lg bg-white rounded-2xl p-8 shadow-[10px_10px_0px_rgba(177,144,129,0.25)] border border-[#eadccf]">

        <h2 className="text-2xl font-bold text-center text-[#b19081] mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="grid gap-4">

          <input name="name" placeholder="Name" onChange={handleChange}
            className="input-style" />

          <input name="email" placeholder="Email" onChange={handleChange}
            className="input-style" />

          <input name="password" type="password" placeholder="Password" onChange={handleChange}
            className="input-style" />

          <input name="phone" placeholder="Phone" onChange={handleChange}
            className="input-style" />

          <input name="age" type="number" placeholder="Age" onChange={handleChange}
            className="input-style" />

          <select name="gender" onChange={handleChange}
            className="input-style">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input name="college" placeholder="College" onChange={handleChange}
            className="input-style" />

          <button
            type="submit"
            className="w-full bg-[#b19081] text-white py-2 rounded-lg shadow hover:opacity-90 transition"
          >
            Signup
          </button>

        </form>

        <p className="text-sm text-center mt-4 text-gray-500">
          Already have an account?{" "}
          <span
            className="text-[#b19081] cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>

      </div>

      {/* Reusable input style */}
      <style>{`
        .input-style {
          width: 100%;
          padding: 10px 14px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          outline: none;
        }
        .input-style:focus {
          border-color: #b19081;
          box-shadow: 0 0 0 2px rgba(177,144,129,0.2);
        }
      `}</style>

    </div>
  );
}

export default Signup;