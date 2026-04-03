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
    <div className="space-y-4">

      {interests.length === 0 ? (
        <p className="text-gray-500">No one yet</p>
      ) : (
        interests.map((item) => (
          <div
            key={item._id}
            className="bg-white p-5 rounded-xl 
            shadow-[6px_6px_0px_rgba(177,144,129,0.2)]"
          >
            {/* Header */}
            <div className="mb-3">
              <p className="text-lg font-semibold">
                {item.user?.name}
              </p>

              <p className="text-sm text-gray-500">
                Interested in:{" "}
                <span className="font-medium text-[#b19081]">
                  {item.post?.title}
                </span>
              </p>
            </div>

            {/* User Details */}
            <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
              <p><span className="font-medium">Email:</span> {item.user?.email}</p>
              <p><span className="font-medium">Phone:</span> {item.user?.phone}</p>
              <p><span className="font-medium">Age:</span> {item.user?.age}</p>
              <p><span className="font-medium">Gender:</span> {item.user?.gender}</p>
              <p className="md:col-span-2">
                <span className="font-medium">College:</span> {item.user?.college}
              </p>
            </div>

            {/* Tag */}
            <span className="text-xs bg-[#b8d8d8] px-3 py-1 rounded-full">
              Interested User
            </span>
          </div>
        ))
      )}

    </div>
  );
}

export default InterestList;