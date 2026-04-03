import { useState } from "react";
import axios from "axios";

function PostCard({ post, user, fetchPosts }) {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [loadingInterest, setLoadingInterest] = useState(false);

  // Send interest
  const handleInterest = async () => {
    try {
      setLoadingInterest(true);

      await axios.post("http://localhost:5000/api/interests", {
        userId: user._id,
        postId: post._id
      });

      alert("Interest sent!");
      
      // refresh data
      await fetchPosts();

    } catch (err) {
      console.error(err);
    } finally {
      setLoadingInterest(false);
    }
  };

  // Mark post as completed
  const handleComplete = async () => {
    try {
      setLoadingComplete(true);

      await axios.put(
        `http://localhost:5000/api/posts/${post._id}/complete`
      );

      // Auto refresh after update
      await fetchPosts();

    } catch (err) {
      console.error(err);
    } finally {
      setLoadingComplete(false);
    }
  };

  const isOwner = post.user?._id === user._id;

  return (
    <div>
      <hr />

      <h3>{post.title}</h3>

      <p><strong>Posted by:</strong> {post.user?.name}</p>

      {/* Owner Details */}
      <p><strong>Phone:</strong> {post.user?.phone}</p>
      <p><strong>Age:</strong> {post.user?.age}</p>
      <p><strong>Gender:</strong> {post.user?.gender}</p>
      <p><strong>College:</strong> {post.user?.college}</p>

      <p>{post.location} | ₹{post.rent}</p>
      <p>{post.roomType}</p>

      <p><strong>Lifestyle:</strong> {post.lifestyle}</p>
      <p><strong>Preferences:</strong> {post.preferences}</p>

      <p>{post.description}</p>

      {/* Date */}
      <p>
        <small>
          Posted on: {new Date(post.createdAt).toLocaleDateString()}
        </small>
      </p>

      {/* Status */}
      <p>
        Status:{" "}
        <strong style={{ color: post.status === "completed" ? "red" : "green" }}>
          {post.status}
        </strong>
      </p>

      {/* Owner actions */}
      {isOwner && post.status === "available" && (
        <button onClick={handleComplete} disabled={loadingComplete}>
          {loadingComplete ? "Updating..." : "Mark as Completed"}
        </button>
      )}

      {/* Non-owner actions */}
      {!isOwner && post.status === "available" && (
        <button onClick={handleInterest} disabled={loadingInterest}>
          {loadingInterest ? "Sending..." : "I'm Interested ❤️"}
        </button>
      )}

      {/* Completed state */}
      {post.status === "completed" && (
        <p><strong>Room Filled</strong></p>
      )}
    </div>
  );
}

export default PostCard;