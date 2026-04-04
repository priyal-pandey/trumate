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

  const inputStyle =
    "w-full px-4 py-2 bg-[#0A0A0A] border border-[#262626] rounded-lg text-white placeholder-[#71717A] focus:outline-none focus:ring-2 focus:ring-[#6366F1]";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 rounded-2xl bg-[#111111] border border-[#262626] shadow-[0_0_20px_rgba(0,0,0,0.6)]"
    >

      {/* Row 1 */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className={inputStyle}
        />

        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className={inputStyle}
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
          className={inputStyle}
        />

        <select
          name="roomType"
          value={form.roomType}
          onChange={handleChange}
          className={inputStyle}
        >
          <option value="Shared" className="text-black">Shared</option>
          <option value="Private" className="text-black">Private</option>
        </select>
      </div>

      {/* Lifestyle */}
      <input
        name="lifestyle"
        placeholder="Lifestyle (e.g. Non-smoker)"
        value={form.lifestyle}
        onChange={handleChange}
        className={inputStyle}
      />

      {/* Preferences */}
      <input
        name="preferences"
        placeholder="Preferences (e.g. Clean roommate)"
        value={form.preferences}
        onChange={handleChange}
        className={inputStyle}
      />

      {/* Description */}
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        rows={3}
        className={inputStyle}
      />

      {/* Button */}
      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#14B8A6] text-black font-medium hover:opacity-90 transition shadow-[0_0_15px_rgba(99,102,241,0.25)]"
      >
        Create Listing
      </button>

    </form>
  );
}

export default PostForm;