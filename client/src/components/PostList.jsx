import PostCard from "./PostCard";

function PostList({ posts, user, fetchPosts }) {
  return (
    <div className="space-y-4">

      {posts.length === 0 ? (
        <p className="text-[#71717A] text-center">No listings yet</p>
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