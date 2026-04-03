import { useEffect, useState } from "react";
import axios from "axios";

function PastListings({ user }) {
  const [posts, setPosts] = useState([]);

  const fetchPastPosts = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/posts/history/${user._id}`
      );
      setPosts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (user) {
      fetchPastPosts();
    }
  }, [user]);

  return (
    <div>
      <h2>Past Listings</h2>

      {posts.length === 0 ? (
        <p>No past listings</p>
      ) : (
        posts.map((post) => (
          <div key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.location} | ₹{post.rent}</p>
            <p>Status: {post.status}</p>

            <p>
              Posted on: {new Date(post.createdAt).toLocaleDateString()}
            </p>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default PastListings;