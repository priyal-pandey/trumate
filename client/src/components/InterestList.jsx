import { useEffect, useState } from "react";
import axios from "axios";

function InterestList({ user }) {
  const [interests, setInterests] = useState([]);

  const fetchInterests = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/interests/post-owner/${user._id}`
      );
      setInterests(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (user) {
      fetchInterests();
    }
  }, [user]);

  return (
    <div>
      <h2>People Interested in Your Posts</h2>

      {interests.length === 0 ? (
        <p>No one yet</p>
      ) : (
        interests.map((item) => (
          <div key={item._id}>
            <p>
              <strong>{item.user?.name}</strong> is interested in{" "}
              <strong>{item.post?.title}</strong>
            </p>

            {/* Full user details */}
            <p>Email: {item.user?.email}</p>
            <p>Phone: {item.user?.phone}</p>
            <p>Age: {item.user?.age}</p>
            <p>Gender: {item.user?.gender}</p>
            <p>College: {item.user?.college}</p>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default InterestList;