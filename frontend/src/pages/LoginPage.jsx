import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";

const LoginPage = () => {
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
      
      <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-tr from-[#000000] via-[#2a2a2a] to-[#0077b6] opacity-75"></div>

      <div className="relative z-10 flex flex-col md:flex-row-reverse items-center justify-between w-full max-w-5xl p-10 bg-opacity-20 backdrop-blur-2xl rounded-xl shadow-2xl border border-gray-700">

        <div className="w-full md:w-1/2 flex justify-center">
          {animationData ? (
            <Lottie animationData={animationData} loop={true} className="w-72 md:w-96" />
          ) : (
            <p className="text-gray-400 text-lg">Loading animation...</p>
          )}
        </div>

        <div className="w-full md:w-1/2 space-y-8">
          <h1 className="text-5xl font-extrabold text-white tracking-wide font-serif">Welcome Back!</h1>
          <p className="text-lg text-gray-300 font-light">
            Login to access your chatbot assistant.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-200 font-semibold text-lg">Username</label>
              <input
                type="text"
                className="w-full px-5 py-3 bg-gray-900 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none font-mono"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label className="block text-gray-200 font-semibold text-lg">Password</label>
              <input
                type="password"
                className="w-full px-5 py-3 bg-gray-900 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none font-mono"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-lg rounded-lg hover:scale-105 transition-transform duration-300 tracking-wider font-sans"
            >
              Login
            </button>
          </form>

          <p className="text-gray-400 text-sm font-light">
            Don't have an account?{" "}
            <button 
              onClick={() => navigate("/signup")}
              className="text-cyan-400 hover:underline font-medium tracking-wide"
            >
              Sign up
            </button>
          </p>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
