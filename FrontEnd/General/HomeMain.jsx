import React from 'react';
import logo from '../src/assets/Images/TasteOrbits.png';
import { Link } from 'react-router-dom';

const HomeMain = () => {
  return (
    <div className="min-h-[70vh] w-full bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col">
      
      {/* Auth Links (Top Right, glass buttons) */}
      <div className="w-full flex justify-end px-6 py-4">
        <ul className="flex flex-wrap justify-end gap-3 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg font-medium">
          <li>
            <Link
              to="/partner/register"
              className="px-3 sm:px-4 py-1.5 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-transform duration-300"
            >
              Become Food Partner
            </Link>
          </li>
          <li>
            <Link
              to="/partner/login"
              className="px-3 sm:px-4 py-1.5 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-transform duration-300"
            >
              Login as Food Partner
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="px-3 sm:px-4 py-1.5 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-transform duration-300"
            >
              Log in
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="px-3 sm:px-4 py-1.5 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-transform duration-300"
            >
              Sign up
            </Link>
          </li>
        </ul>
      </div>

      {/* Hero Section */}
      <main className="flex-grow flex items-center justify-center px-4 pb-12">
        <div className="w-full max-w-3xl rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl px-6 sm:px-10 md:px-14 py-8 sm:py-12 text-center">
          <img
            src={logo}
            alt="TasteOrbit Logo"
            className="mx-auto mb-6 sm:mb-8 w-[180px] sm:w-[220px] md:w-[260px] drop-shadow-lg transition-transform duration-500 hover:scale-105"
          />
          <h1 className="font-bold leading-tight drop-shadow-md text-[clamp(1.4rem,4.5vw,2.5rem)]">
            Find the best restaurants, cafes and bars in India
          </h1>
          <p className="mt-3 sm:mt-4 text-gray-300 text-[clamp(0.9rem,2.6vw,1.2rem)]">
            Powered by Google Gemini AI
          </p>
        </div>
      </main>
    </div>
  );
};

export default HomeMain;