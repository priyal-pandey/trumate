import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">

      {/* 🔔 Top Banner */}
      <div className="w-full bg-gradient-to-r from-[#6366F1] to-[#14B8A6] text-black text-center py-2 text-sm font-medium">
        Find your perfect roommate faster with Trumate ✨
      </div>

      {/* 🌟 Hero Section */}
      <div className="flex items-center justify-center px-6 py-16 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#0A0A0A]">
        <div className="max-w-4xl w-full text-center">

          {/* Brand */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#6366F1] to-[#14B8A6] bg-clip-text text-transparent">
            Trumate
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-[#A1A1AA] mb-10">
            Discover compatible roommates near your college based on lifestyle,
            preferences, and comfort.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">

            <button
              onClick={() => navigate("/login")}
              className="px-8 py-3 rounded-lg font-medium bg-gradient-to-r from-[#6366F1] to-[#14B8A6] text-black shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:opacity-90 transition"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="px-8 py-3 rounded-lg border border-[#6366F1] text-[#6366F1] hover:bg-[#6366F1] hover:text-black transition"
            >
              Get Started
            </button>

          </div>

          {/* Decorative Card */}
          <div className="bg-[#111111] rounded-2xl p-6 border border-[#262626] shadow-[0_0_20px_rgba(20,184,166,0.1)]">
            <p className="text-[#A1A1AA] text-sm">
              Create listings • Browse roommates • Connect instantly
            </p>
          </div>

        </div>
      </div>

      {/* ✨ Features Section */}
      <div className="px-6 pb-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

          <div className="bg-[#111111] p-6 rounded-xl border border-[#262626] shadow-[0_0_20px_rgba(99,102,241,0.1)]">
            <h3 className="font-semibold text-lg mb-2 text-[#6366F1]">
              Smart Matching
            </h3>
            <p className="text-sm text-[#A1A1AA]">
              Match based on lifestyle, habits, and preferences.
            </p>
          </div>

          <div className="bg-[#111111] p-6 rounded-xl border border-[#262626] shadow-[0_0_20px_rgba(20,184,166,0.1)]">
            <h3 className="font-semibold text-lg mb-2 text-[#14B8A6]">
              Easy Listings
            </h3>
            <p className="text-sm text-[#A1A1AA]">
              Create and manage roommate listings effortlessly.
            </p>
          </div>

          <div className="bg-[#111111] p-6 rounded-xl border border-[#262626] shadow-[0_0_20px_rgba(99,102,241,0.1)]">
            <h3 className="font-semibold text-lg mb-2 text-[#6366F1]">
              Direct Connect
            </h3>
            <p className="text-sm text-[#A1A1AA]">
              Interested users can reach out instantly.
            </p>
          </div>

        </div>
      </div>

      {/* 🧭 How It Works */}
      <div className="px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-2xl font-semibold mb-10 text-[#6366F1]">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-[#111111] p-6 rounded-xl border border-[#262626] shadow-[0_0_15px_rgba(99,102,241,0.1)]">
              <h4 className="font-semibold mb-2 text-[#6366F1]">Create Profile</h4>
              <p className="text-sm text-[#A1A1AA]">
                Sign up and add your preferences and details.
              </p>
            </div>

            <div className="bg-[#111111] p-6 rounded-xl border border-[#262626] shadow-[0_0_15px_rgba(20,184,166,0.1)]">
              <h4 className="font-semibold mb-2 text-[#14B8A6]">Browse Listings</h4>
              <p className="text-sm text-[#A1A1AA]">
                Explore available roommates and filter matches.
              </p>
            </div>

            <div className="bg-[#111111] p-6 rounded-xl border border-[#262626] shadow-[0_0_15px_rgba(99,102,241,0.1)]">
              <h4 className="font-semibold mb-2 text-[#6366F1]">Connect</h4>
              <p className="text-sm text-[#A1A1AA]">
                Express interest and connect with suitable roommates.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-[#71717A] pb-6">
        © {new Date().getFullYear()} Trumate. All rights reserved.
      </div>

    </div>
  );
}

export default Landing;