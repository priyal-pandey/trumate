import { useState } from "react";
import axios from "axios";

function PostForm({ fetchPosts, user }) {
  const [form, setForm] = useState({
    title: "",
    location: "",
    rent: "",
    roomType: "Shared",
    lifestyle: "",
    preferences: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/posts", {
        ...form,
        userId: user._id
      });

      setForm({
        title: "",
        location: "",
        rent: "",
        roomType: "Shared",
        lifestyle: "",
        preferences: "",
        description: ""
      });

      fetchPosts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Post</h2>

      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
      <input name="location" placeholder="Location" value={form.location} onChange={handleChange} />
      <input name="rent" type="number" placeholder="Rent" value={form.rent} onChange={handleChange} />

      <select name="roomType" value={form.roomType} onChange={handleChange}>
        <option value="Shared">Shared</option>
        <option value="Private">Private</option>
      </select>

  
      <input name="lifestyle" placeholder="Lifestyle (e.g. Non-smoker)" value={form.lifestyle} onChange={handleChange} />


      <input name="preferences" placeholder="Preferences (e.g. Clean roommate)" value={form.preferences} onChange={handleChange} />

      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />

      <button type="submit">Create Post</button>
    </form>
  );
}

export default PostForm;