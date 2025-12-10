import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const RegisterPartner = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    address: "",
    city: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullname, email, password, address, city } = formData;

    try {
      const response = await axios.post("http://localhost:3000/api/auth/partner/register", {
        fullName: fullname,
        email,
        password,
        address,
        city
      });
      console.log("Registration Successful:", response.data);
      navigate("/partner/login");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message || "Registration failed. Please try again.");
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl w-full max-w-md p-10">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <h1 className="text-4xl font-extrabold text-white drop-shadow-md tracking-wide">
            TasteOrbits Partner
          </h1>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-2 text-white drop-shadow-sm">
          Register Your Restaurant
        </h2>
        <p className="text-center text-gray-300 mb-8 text-sm">
          Sign up to showcase your restaurant, cafe or bar on TasteOrbits
        </p>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          />

          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Restaurant Address"
            className="resize-none w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          />

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          />

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition shadow-md"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-300 mt-8">
          Already a partner?{" "}
          <Link to="/partner/login" className="text-red-400 font-medium hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPartner;