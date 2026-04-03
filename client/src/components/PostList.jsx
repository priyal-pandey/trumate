import PostCard from "./PostCard";

function PostList({ posts, user, fetchPosts }) {
  return (
    <div className="space-y-4">

      {posts.length === 0 ? (
        <p className="text-gray-500">No listings yet</p>
      ) : (
        posts.map((post) => (
          <div
            key={post._id}
            className="bg-white p-5 rounded-xl 
            shadow-[6px_6px_0px_rgba(177,144,129,0.2)]"
          >
            <PostCard
              post={post}
              user={user}
              fetchPosts={fetchPosts}
            />
          </div>
        ))
      )}

    </div>
  );
}

export default PostList;