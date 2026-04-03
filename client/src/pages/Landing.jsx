import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7efe5]">

      {/* 🔔 Top Banner */}
      <div className="w-full bg-[#b19081] text-white text-center py-2 text-sm">
        Find your perfect roommate faster with Trumate ✨
      </div>

      {/* 🌟 Hero Section */}
      <div className="flex items-center justify-center px-6 py-16">
        <div className="max-w-4xl w-full text-center">

          {/* Brand */}
          <h1 className="text-5xl md:text-6xl font-bold text-[#b19081] mb-6">
            Trumate
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Discover compatible roommates near your college based on lifestyle,
            preferences, and comfort.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">

            <button
              onClick={() => navigate("/login")}
              className="px-8 py-3 bg-[#b19081] text-white rounded-lg shadow hover:opacity-90 transition"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="px-8 py-3 border border-[#b19081] text-[#b19081] rounded-lg hover:bg-[#b19081] hover:text-white transition"
            >
              Get Started
            </button>

          </div>

          {/* Decorative Card */}
          <div className="bg-white rounded-2xl p-6 shadow-[10px_10px_0px_rgba(177,144,129,0.25)]">
            <p className="text-gray-500 text-sm">
              Create listings • Browse roommates • Connect instantly
            </p>
          </div>

        </div>
      </div>

      {/* ✨ Features Section */}
      <div className="px-6 pb-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow-[6px_6px_0px_rgba(177,144,129,0.2)]">
            <h3 className="font-semibold text-lg mb-2 text-[#b19081]">
              Smart Matching
            </h3>
            <p className="text-sm text-gray-600">
              Match based on lifestyle, habits, and preferences.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-[6px_6px_0px_rgba(177,144,129,0.2)]">
            <h3 className="font-semibold text-lg mb-2 text-[#b19081]">
              Easy Listings
            </h3>
            <p className="text-sm text-gray-600">
              Create and manage roommate listings effortlessly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-[6px_6px_0px_rgba(177,144,129,0.2)]">
            <h3 className="font-semibold text-lg mb-2 text-[#b19081]">
              Direct Connect
            </h3>
            <p className="text-sm text-gray-600">
              Interested users can reach out instantly.
            </p>
          </div>

        </div>
      </div>

      {/* 🧭 How It Works */}
      <div className="px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-2xl font-semibold mb-10 text-[#b19081]">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl shadow-[6px_6px_0px_rgba(177,144,129,0.2)]">
              
              <h4 className="font-semibold mb-2">Create Profile</h4>
              <p className="text-sm text-gray-600">
                Sign up and add your preferences and details.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-[6px_6px_0px_rgba(177,144,129,0.2)]">
              
              <h4 className="font-semibold mb-2">Browse Listings</h4>
              <p className="text-sm text-gray-600">
                Explore available roommates and filter matches.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-[6px_6px_0px_rgba(177,144,129,0.2)]">
              
              <h4 className="font-semibold mb-2">Connect</h4>
              <p className="text-sm text-gray-600">
                Express interest and connect with suitable roommates.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-400 pb-6">
        © {new Date().getFullYear()} Trumate. All rights reserved.
      </div>

    </div>
  );
}

export default Landing;