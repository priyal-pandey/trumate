import PostCard from "./PostCard";

function PostList({ posts, user, fetchPosts }) {
  return (
    <div>
      <h2>All Listings</h2>

      {posts.length === 0 ? (
        <p>No posts yet</p>
      ) : (
        posts.map((post) => (
          <PostCard
            key={post._id}
            post={post}
            user={user}
            fetchPosts={fetchPosts}
          />
        ))
      )}
    </div>
  );
}

export default PostList;