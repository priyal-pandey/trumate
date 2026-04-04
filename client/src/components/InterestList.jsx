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
        <p className="text-[#71717A] text-center">No one yet</p>
      ) : (
        interests.map((item) => (
          <div
            key={item._id}
            className="p-5 rounded-2xl bg-[#111111] border border-[#262626] shadow-[0_0_20px_rgba(0,0,0,0.6)] hover:border-[#14B8A6]/40 transition"
          >

            {/* Header */}
            <div className="mb-3">
              <p className="text-lg font-semibold text-white">
                {item.user?.name}
              </p>

              <p className="text-sm text-[#A1A1AA]">
                Interested in:{" "}
                <span className="font-medium text-[#6366F1]">
                  {item.post?.title}
                </span>
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-[#262626] my-3"></div>

            {/* User Details */}
            <div className="grid md:grid-cols-2 gap-2 text-sm text-[#D4D4D8] mb-3">
              <p>
                <span className="text-[#A1A1AA]">Email:</span>{" "}
                {item.user?.email}
              </p>

              <p>
                <span className="text-[#A1A1AA]">Phone:</span>{" "}
                {item.user?.phone}
              </p>

              <p>
                <span className="text-[#A1A1AA]">Age:</span>{" "}
                {item.user?.age}
              </p>

              <p>
                <span className="text-[#A1A1AA]">Gender:</span>{" "}
                {item.user?.gender}
              </p>

              <p className="md:col-span-2">
                <span className="text-[#A1A1AA]">College:</span>{" "}
                {item.user?.college}
              </p>
            </div>

            {/* Tag */}
            <span className="text-xs px-3 py-1 rounded-full border border-[#14B8A6]/30 bg-[#0A0A0A] text-[#99F6E4]">
              Interested User
            </span>

          </div>
        ))
      )}

    </div>
  );
}

export default InterestList;