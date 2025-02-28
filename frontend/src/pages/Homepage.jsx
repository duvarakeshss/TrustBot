import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Lottie from "lottie-react";

const Homepage = () => {
  const [animationData, setAnimationData] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch("/Animation - 1740718703104.json");
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
    <div className="relative min-h-screen flex flex-col items-center text-white">
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#1fbac2]"></div>
      <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-tr from-[#000000] via-[#2a2a2a] to-[#0077b6] opacity-80"></div>

      <div className="relative z-10 w-full">
        
        <nav className="w-full py-6 flex justify-center">
          <ul className="flex space-x-8 text-lg font-semibold text-gray-300">
            <li><a href="#" className="hover:text-[#1fbac2] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#1fbac2] transition">Help</a></li>
            <li><a href="#" className="hover:text-[#1fbac2] transition">Contacts</a></li>
          </ul>
        </nav>

        <div className="flex flex-col md:flex-row items-center justify-center px-8 md:px-16 lg:px-32 gap-12 mt-10">
          
          <div className="text-center md:text-left max-w-lg">
            <h1 className="text-5xl font-bold text-white">CHAT BOT</h1>
            <p className="text-lg text-gray-400 mt-4">
              Your AI-powered chatbot assistant. Get instant responses and smart automation.
            </p>

            <div className="mt-6 space-x-4">
              <button 
                className="px-6 py-3 border-2 border-cyan-400 text-white rounded-lg hover:bg-cyan-400 hover:text-black transition"
                onClick={() => navigate("/login")} 
              >
                Login
              </button>
              <button 
                className="px-6 py-3 border-2 border-cyan-400 text-white rounded-lg hover:bg-cyan-400 hover:text-black transition"
              >
                Sign Up
              </button>
            </div>
          </div>

          <div className="w-72 md:w-96">
            {animationData ? (
              <Lottie animationData={animationData} loop={true} />
            ) : (
              <p className="text-gray-400">Loading animation...</p>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Homepage;
