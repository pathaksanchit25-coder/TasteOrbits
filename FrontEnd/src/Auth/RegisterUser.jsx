import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

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
    const { name: fullName, email, password } = formData;

    try {
      await axios.post(
        "http://localhost:3000/api/auth/user/register",
        { fullName, email, password },
        { withCredentials: true }
      );

      alert("Registration successful!");
      navigate('/login');
    } catch (error) {
      if (error.response?.status === 400) {
        alert(error.response?.data?.error || "Email already exists. Please use a different one.");
      } else {
        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Register Card */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl w-full max-w-md p-10">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <h1 className="text-4xl font-extrabold text-white drop-shadow-md tracking-wide">
            TasteOrbits
          </h1>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-2 text-white drop-shadow-sm">
          Create Your Account
        </h2>
        <p className="text-center text-gray-300 mb-8 text-sm">
          Sign up to explore the best restaurants, cafes and bars near you
        </p>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              autoComplete="off"
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition shadow-md"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-8">
          <hr className="flex-grow border-white/20" />
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <hr className="flex-grow border-white/20" />
        </div>

        {/* Social Signup */}
        <div className="flex flex-col gap-3">
          <button className="w-full bg-white/10 backdrop-blur-md border border-white/20 py-3 rounded-lg hover:bg-white/20 transition text-white">
            Continue with Google
          </button>
          <button className="w-full bg-white/10 backdrop-blur-md border border-white/20 py-3 rounded-lg hover:bg-white/20 transition text-white">
            Continue with Facebook
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-300 mt-8">
          Already have an account?{" "}
          <Link to='/login' className="text-red-400 font-medium hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterUser;