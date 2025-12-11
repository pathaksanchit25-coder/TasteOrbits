import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PartnerDashboardCreate = () => {
  const [partnerName, setPartnerName] = useState("");
  const navigate = useNavigate();

  const partnerData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/foodpartner/dashboard", {
        withCredentials: true,
      });
      console.log(response.data);
      setPartnerName(response.data.foodPartner.fullName);
    } catch (err) {
      console.error("Error fetching partner dashboard:", err);
    }
  };

  const logoutButton = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/auth/partner/logout", {
        withCredentials: true,
        
      });
      console.log(response.data);
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  useEffect(() => {
    partnerData();
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen flex flex-col items-center px-6 py-10">
      {/* Top Bar */}
      <div className="w-full flex justify-between items-center mb-10 max-w-6xl">
        <h1 className="text-4xl font-extrabold text-white tracking-wide">
          Partner Dashboard
        </h1>
        <button
          onClick={logoutButton}
          className="px-5 py-2 rounded-lg bg-red-500 text-white font-semibold shadow-md hover:bg-red-600 transition-transform hover:scale-105"
        >
          Logout
        </button>
      </div>

      {/* Welcome Message */}
      <p className="text-gray-300 text-xl mb-12 text-center max-w-3xl leading-relaxed">
        Welcome back, <span className="text-red-400 font-bold">{partnerName}</span>!  
        Manage your restaurant listings and delivery services with ease.  
        Choose an option below to get started.
      </p>

      {/* Action Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Add Restaurants Box */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-10 text-center hover:scale-105 transition-transform cursor-pointer">
          <h2 className="text-2xl font-bold text-white mb-4">🍴 Add Restaurants</h2>
          <p className="text-gray-300 mb-6">
            Manage your restaurant listings, update menus, and keep your customers engaged.
          </p>
          <Link to="/partner/restaurant/add">
            <button className="px-6 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition">
              Add Restaurants
            </button>
          </Link>
        </div>

        {/* Add Delivery Box */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-10 text-center hover:scale-105 transition-transform cursor-pointer">
          <h2 className="text-2xl font-bold text-white mb-4">🚚 Add for Delivery</h2>
          <p className="text-gray-300 mb-6">
            Manage delivery services, track orders, and expand your reach.
          </p>
          <Link to="/partner/addDelivery">
            <button className="px-6 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition">
              Go to Delivery
            </button>
          </Link>
        </div>

        {/* View Restaurants Box */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-10 text-center hover:scale-105 transition-transform cursor-pointer">
          <h2 className="text-2xl font-bold text-white mb-4">📋 View Restaurants</h2>
          <p className="text-gray-300 mb-6">
            See all the restaurants you’ve already added and manage their details.
          </p>
          <Link to="/partner/restaurant/view">
            <button className="px-6 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition">
              View Restaurants
            </button>
          </Link>
        </div>

        {/* View Deliveries Box */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-10 text-center hover:scale-105 transition-transform cursor-pointer">
          <h2 className="text-2xl font-bold text-white mb-4">📦 View Deliveries</h2>
          <p className="text-gray-300 mb-6">
            Track and manage all your existing delivery services in one place.
          </p>
          <Link to="/partner/viewDeliveries">
            <button className="px-6 py-2 rounded-lg bg-purple-500 text-white font-semibold hover:bg-purple-600 transition">
              View Deliveries
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartnerDashboardCreate;