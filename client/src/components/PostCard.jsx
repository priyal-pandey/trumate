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
    <div className="space-y-4 p-5 rounded-2xl bg-[#111111] border border-[#262626] shadow-[0_0_20px_rgba(0,0,0,0.6)] hover:border-[#6366F1]/40 transition">

      {/* Title */}
      <h3 className="text-xl font-semibold text-white">
        {post.title}
      </h3>

      {/* Location + Rent */}
      <p className="text-sm text-[#A1A1AA]">
        {post.location} •{" "}
        <span className="text-[#6366F1] font-medium">
          ₹{post.rent}
        </span>
      </p>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap">
        <span className="text-xs px-3 py-1 rounded-full border border-[#6366F1]/40 bg-[#0A0A0A] text-[#C7D2FE]">
          {post.roomType}
        </span>

        {post.lifestyle && (
          <span className="text-xs px-3 py-1 rounded-full border border-[#14B8A6]/40 bg-[#0A0A0A] text-[#99F6E4]">
            {post.lifestyle}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-[#D4D4D8] leading-relaxed">
        {post.description}
      </p>

      {/* User Info */}
      <div className="text-sm text-[#A1A1AA] space-y-1 pt-2 border-t border-[#262626]">
        <p className="font-semibold text-white">{post.user?.name}</p>
        <p>{post.user?.college}</p>
        <p>
          {post.user?.age} • {post.user?.gender}
        </p>
        <p>{post.user?.phone}</p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center pt-2">
        <p className="text-xs text-[#71717A]">
          {new Date(post.createdAt).toLocaleDateString()}
        </p>

        <span
          className={`text-xs px-3 py-1 rounded-full border ${
            post.status === "completed"
              ? "bg-[#1F2937] text-[#FCA5A5] border-[#FCA5A5]/30"
              : "bg-[#1F2937] text-[#FDE68A] border-[#FDE68A]/30"
          }`}
        >
          {post.status}
        </span>
      </div>

      {/* Actions */}
      <div className="pt-2 space-y-2">

        {isOwner && post.status === "available" && (
          <button
            onClick={handleComplete}
            disabled={loadingComplete}
            className="w-full py-2 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#14B8A6] text-black font-medium hover:opacity-90 transition shadow-[0_0_15px_rgba(99,102,241,0.25)]"
          >
            {loadingComplete ? "Updating..." : "Mark as Completed"}
          </button>
        )}

        {!isOwner && post.status === "available" && (
          <button
            onClick={handleInterest}
            disabled={loadingInterest}
            className="w-full py-2 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#14B8A6] text-black font-medium hover:opacity-90 transition shadow-[0_0_15px_rgba(20,184,166,0.25)]"
          >
            {loadingInterest ? "Sending..." : "I'm Interested ❤️"}
          </button>
        )}

        {post.status === "completed" && (
          <p className="text-center text-sm text-[#71717A]">
            Room Filled
          </p>
        )}

      </div>
    </div>
  );
}

export default PostCard;