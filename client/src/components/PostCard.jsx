import { useState } from "react";
import axios from "axios";

function PostCard({ post, user, fetchPosts }) {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [loadingInterest, setLoadingInterest] = useState(false);

  const handleInterest = async () => {
    try {
      setLoadingInterest(true);

      await axios.post("http://localhost:5000/api/interests", {
        userId: user._id,
        postId: post._id
      });

      await fetchPosts();
      alert("Interest sent!");
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingInterest(false);
    }
  };

  const handleComplete = async () => {
    try {
      setLoadingComplete(true);

      await axios.put(
        `http://localhost:5000/api/posts/${post._id}/complete`
      );

      await fetchPosts();
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingComplete(false);
    }
  };

  const isOwner = post.user?._id === user._id;

  return (
    <div className="space-y-3">

      {/* Title */}
      <h3 className="text-xl font-semibold">
        {post.title}
      </h3>

      {/* Location + Rent */}
      <p className="text-gray-500">
        {post.location} •{" "}
        <span className="text-[#b19081] font-medium">
          ₹{post.rent}
        </span>
      </p>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap">
        <span className="text-xs bg-[#ead58f] px-3 py-1 rounded-full">
          {post.roomType}
        </span>

        {post.lifestyle && (
          <span className="text-xs bg-[#b8d8d8] px-3 py-1 rounded-full">
            {post.lifestyle}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700">
        {post.description}
      </p>

      {/* User Info */}
      <div className="text-sm text-gray-600 space-y-1 pt-3">
        <p className="font-semibold">{post.user?.name}</p>
        <p>{post.user?.college}</p>
        <p>
          {post.user?.age} • {post.user?.gender}
        </p>
        <p>{post.user?.phone}</p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center pt-2">
        <p className="text-xs text-gray-400">
          {new Date(post.createdAt).toLocaleDateString()}
        </p>

        <span
          className={`text-xs px-3 py-1 rounded-full ${
            post.status === "completed"
              ? "bg-[#e8b4b8]"
              : "bg-[#ead58f]"
          }`}
        >
          {post.status}
        </span>
      </div>

      {/* Actions */}
      <div className="pt-2">

        {isOwner && post.status === "available" && (
          <button
            onClick={handleComplete}
            disabled={loadingComplete}
            className="w-full py-2 bg-[#b19081] text-white rounded-lg shadow hover:opacity-90 transition"
          >
            {loadingComplete ? "Updating..." : "Mark as Completed"}
          </button>
        )}

        {!isOwner && post.status === "available" && (
          <button
            onClick={handleInterest}
            disabled={loadingInterest}
            className="w-full py-2 bg-[#b19081] text-white rounded-lg shadow hover:opacity-90 transition"
          >
            {loadingInterest ? "Sending..." : "I'm Interested ❤️"}
          </button>
        )}

        {post.status === "completed" && (
          <p className="text-center text-sm text-gray-500">
            Room Filled
          </p>
        )}

      </div>
    </div>
  );
}

export default PostCard;