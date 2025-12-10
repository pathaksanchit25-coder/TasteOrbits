import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const LoginUser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      await axios.post(
        'http://localhost:3000/api/auth/user/login',
        { email, password },
        { withCredentials: true }
      );
      navigate('/user');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message || "Login failed. Please try again.");
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Login Card */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl w-full max-w-md p-10">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <h1 className="text-3xl font-bold text-white drop-shadow-md">TasteOrbits</h1>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-4 text-white drop-shadow-sm">
          Welcome Back
        </h2>
        <p className="text-center text-gray-300 mb-6">
          Log in to explore the best restaurants, cafes and bars near you
        </p>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              autoComplete="off"
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition shadow-md"
          >
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-white/20" />
          <span className="px-2 text-gray-400 text-sm">OR</span>
          <hr className="flex-grow border-white/20" />
        </div>

        {/* Social Login */}
        <div className="flex flex-col gap-3">
          <button className="w-full bg-white/10 backdrop-blur-md border border-white/20 py-3 rounded-lg hover:bg-white/20 transition text-white">
            Continue with Google
          </button>
          <button className="w-full bg-white/10 backdrop-blur-md border border-white/20 py-3 rounded-lg hover:bg-white/20 transition text-white">
            Continue with Facebook
          </button>
        </div>

        {/* Signup Link */}
        <p className="text-center text-sm text-gray-300 mt-6">
          New to TasteOrbits?{" "}
          <Link to="/register" className="text-red-400 font-medium hover:underline">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginUser;