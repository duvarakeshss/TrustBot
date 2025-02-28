import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";

const SignUpPage = () => {
  const [animationData, setAnimationData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch("/Animation - 1740720844722.json");
        if (!response.ok) throw new Error("Failed to load animation");
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Error loading animation:", error);
      }
    };
    loadAnimation();
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#1fbac2] text-white">
      {/* Background overlay */}
      <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-tr from-[#000000] via-[#2a2a2a] to-[#0077b6] opacity-75"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-4xl p-6 md:p-10 bg-opacity-20 backdrop-blur-2xl rounded-xl shadow-2xl border border-gray-700">
        {/* Animation */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          {animationData ? (
            <Lottie animationData={animationData} loop={true} className="w-60 sm:w-72 md:w-96" />
          ) : (
            <p className="text-gray-400 text-lg">Loading animation...</p>
          )}
        </div>

        {/* Signup Form */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide font-serif text-center md:text-left">
            Create Account
          </h1>
          <p className="text-lg text-gray-300 font-light text-center md:text-left">
            Join us and explore your chatbot assistant.
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-200 font-semibold text-lg">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-200 font-semibold text-lg">Username</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                placeholder="Choose a username"
                required
              />
            </div>

            <div>
              <label className="block text-gray-200 font-semibold text-lg">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                placeholder="Create a password"
                required
              />
            </div>

            <div>
              <label className="block text-gray-200 font-semibold text-lg">Re-enter Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                placeholder="Re-enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-lg rounded-lg hover:scale-105 transition-transform duration-300 tracking-wider"
            >
              Sign Up
            </button>
          </form>

          <p className="text-gray-400 text-sm font-light text-center md:text-left">
            Already have an account?{" "}
            <button 
              onClick={() => navigate("/login")}
              className="text-cyan-400 hover:underline font-medium tracking-wide"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
