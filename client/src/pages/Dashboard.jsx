import { useEffect, useState } from "react";
import axios from "axios";

import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import InterestList from "../components/InterestList";
import PastListings from "../components/PastListings";

function Dashboard({ user, setUser }) {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/posts");
      setPosts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (user) {
      fetchPosts();
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] p-6 text-white">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#6366F1] to-[#14B8A6] bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-[#A1A1AA] mt-1">
            Welcome back, {user.name} 👋
          </p>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Column */}
        <div className="lg:col-span-1 space-y-6">

          {/* Create Post */}
          <div className="bg-[#111111] p-6 rounded-xl border border-[#262626] shadow-[0_0_20px_rgba(99,102,241,0.1)]">
            <h2 className="text-xl font-semibold mb-4 text-[#6366F1]">
              Create a Listing
            </h2>
            <PostForm fetchPosts={fetchPosts} user={user} />
          </div>

          {/* Interested Users */}
          <div className="bg-[#111111] p-6 rounded-xl border border-[#262626] shadow-[0_0_20px_rgba(20,184,166,0.1)]">
            <h2 className="text-xl font-semibold mb-4 text-[#14B8A6]">
              Interested Users
            </h2>
            <InterestList user={user} />
          </div>

        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-6">

          {/* Active Listings */}
          <div className="bg-[#111111] p-6 rounded-xl border border-[#262626] shadow-[0_0_20px_rgba(99,102,241,0.1)]">

            <h2 className="text-xl font-semibold mb-4 text-[#6366F1]">
              Active Listings
            </h2>

            <PostList
              posts={posts}
              user={user}
              fetchPosts={fetchPosts}
            />

          </div>

          {/* Past Listings */}
          <div className="bg-[#111111] p-6 rounded-xl border border-[#262626] shadow-[0_0_20px_rgba(20,184,166,0.1)]">
            <h2 className="text-xl font-semibold mb-4 text-[#14B8A6]">
              Past Listings
            </h2>
            <PastListings user={user} />
          </div>

        </div>
      </div>

    </div>
  );
}

export default Dashboard;