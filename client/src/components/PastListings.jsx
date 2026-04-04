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
        <p className="text-[#71717A] text-center">No past listings</p>
      ) : (
        posts.map((post) => (
          <div
            key={post._id}
            className="p-5 rounded-2xl bg-[#111111] border border-[#262626] shadow-[0_0_20px_rgba(0,0,0,0.6)] hover:border-[#6366F1]/40 transition"
          >

            {/* Title */}
            <h3 className="text-lg font-semibold text-white mb-1">
              {post.title}
            </h3>

            {/* Location + Rent */}
            <p className="text-sm text-[#A1A1AA] mb-2">
              {post.location} •{" "}
              <span className="font-medium text-[#6366F1]">
                ₹{post.rent}
              </span>
            </p>

            {/* Status */}
            <p className="text-sm mb-2 text-[#D4D4D8]">
              Status:{" "}
              <span
                className={`font-medium capitalize px-2 py-1 rounded-md text-xs border ${
                  post.status === "completed"
                    ? "bg-[#1F2937] text-[#FCA5A5] border-[#FCA5A5]/30"
                    : "bg-[#1F2937] text-[#FDE68A] border-[#FDE68A]/30"
                }`}
              >
                {post.status}
              </span>
            </p>

            {/* Date */}
            <p className="text-xs text-[#71717A]">
              Posted on:{" "}
              {new Date(post.createdAt).toLocaleDateString()}
            </p>

            {/* Tag */}
            <div className="mt-3">
              <span className="text-xs px-3 py-1 rounded-full border border-[#6366F1]/30 bg-[#0A0A0A] text-[#C7D2FE]">
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