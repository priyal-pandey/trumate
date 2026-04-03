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
      // Register
      await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      );

      // Auto login
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: form.email,
          password: form.password
        }
      );

      // Save user
      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Redirect
      navigate("/dashboard");

    } catch (err) {
      console.error(err);
      alert("Error signing up");
    }
  };

  return (
    <div>
      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password"
        placeholder="Password"
         onChange={handleChange} />

        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <input name="age" type="number" placeholder="Age" onChange={handleChange} />

        <select name="gender" onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input name="college" placeholder="College" onChange={handleChange} />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;