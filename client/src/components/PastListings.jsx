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
    <div className="space-y-4">
      {posts.length === 0 ? (
        <p className="text-gray-500">No past listings</p>
      ) : (
        posts.map((post) => (
          <div
            key={post._id}
            className="bg-white p-5 rounded-xl 
            shadow-[6px_6px_0px_rgba(177,144,129,0.2)]"
          >
            {/* Title */}
            <h3 className="text-lg font-semibold mb-1">
              {post.title}
            </h3>

            {/* Location + Rent */}
            <p className="text-sm text-gray-600 mb-2">
              {post.location} |{" "}
              <span className="font-medium text-[#b19081]">
                ₹{post.rent}
              </span>
            </p>

            {/* Status */}
            <p className="text-sm mb-2">
              Status:{" "}
              <span className="font-medium capitalize">
                {post.status}
              </span>
            </p>

            {/* Date */}
            <p className="text-xs text-gray-500">
              Posted on:{" "}
              {new Date(post.createdAt).toLocaleDateString()}
            </p>

            {/* Tag */}
            <div className="mt-3">
              <span className="text-xs bg-[#b8d8d8] px-3 py-1 rounded-full">
                Archived
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default PastListings;