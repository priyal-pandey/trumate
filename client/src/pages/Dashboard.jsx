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

  // Fetch posts after dashboard loads
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
    <div>
      {/* Header */}
      <h1>Roommate Finder</h1>
      <h2>Welcome, {user.name} 👋</h2>

      <button onClick={handleLogout}>Logout</button>

      {/* Create Post */}
      <PostForm fetchPosts={fetchPosts} user={user} />

      <hr />

      {/* Active Listings */}
      <PostList posts={posts} user={user} fetchPosts={fetchPosts} />

      <hr />

      {/* Interested Users */}
      <InterestList user={user} />

      <hr />

      {/* Past Listings */}
      <PastListings user={user} />

    </div>
  );
}

export default Dashboard;