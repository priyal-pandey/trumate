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
    <div className="min-h-screen bg-[#f7efe5] p-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold text-[#b19081]">
            Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Welcome back, {user.name} 👋
          </p>
        </div>

      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Column */}
        <div className="lg:col-span-1 space-y-6">

          {/* Create Post */}
          <div className="bg-white p-6 rounded-xl shadow-[6px_6px_0px_rgba(177,144,129,0.25)]">
            <h2 className="text-xl font-semibold mb-4">
              Create a Listing
            </h2>
            <PostForm fetchPosts={fetchPosts} user={user} />
          </div>

          {/* Interested Users */}
          <div className="bg-white p-6 rounded-xl shadow-[6px_6px_0px_rgba(177,144,129,0.25)]">
            <h2 className="text-xl font-semibold mb-4">
              Interested Users
            </h2>
            <InterestList user={user} />
          </div>

        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-6">

          {/* Active Listings */}
<div className="bg-white p-6 rounded-xl shadow-[6px_6px_0px_rgba(177,144,129,0.25)]">

  <h2 className="text-xl font-semibold mb-4">
    Active Listings
  </h2>

  <PostList
    posts={posts}
    user={user}
    fetchPosts={fetchPosts}
  />

</div>

          {/* Past Listings */}
          <div className="bg-white p-6 rounded-xl shadow-[6px_6px_0px_rgba(177,144,129,0.25)]">
            <h2 className="text-xl font-semibold mb-4">
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