
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
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Row 1 */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b19081]"
        />

        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b19081]"
        />
      </div>

      {/* Row 2 */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
          name="rent"
          type="number"
          placeholder="Rent (₹)"
          value={form.rent}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b19081]"
        />

        <select
          name="roomType"
          value={form.roomType}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b19081]"
        >
          <option value="Shared">Shared</option>
          <option value="Private">Private</option>
        </select>
      </div>

      {/* Lifestyle */}
      <input
        name="lifestyle"
        placeholder="Lifestyle (e.g. Non-smoker)"
        value={form.lifestyle}
        onChange={handleChange}
        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b19081]"
      />

      {/* Preferences */}
      <input
        name="preferences"
        placeholder="Preferences (e.g. Clean roommate)"
        value={form.preferences}
        onChange={handleChange}
        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b19081]"
      />

      {/* Description */}
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        rows={3}
        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b19081]"
      />

      {/* Button */}
      <button
        type="submit"
        className="w-full py-3 bg-[#b19081] text-white rounded-lg hover:opacity-90 transition"
      >
        Create Listing
      </button>

    </form>
  );
}

export default PostForm;