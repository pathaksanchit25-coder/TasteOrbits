import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const PartnerDashboardCreate = ({ partnerName = "Sanchit" }) => {
  async function dataFetchPartner() {
    const response = await axios.post('http://localhost:3000/api/auth/partner/register')
  }
  dataFetchPartner();
  return (
    <div className="bg-black min-h-screen flex flex-col items-center px-6 py-10">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-white mb-4">
        Partner Dashboard
      </h1>

      {/* Welcome Message with Name */}
      <p className="text-gray-300 text-lg mb-10 text-center max-w-2xl">
        Welcome back, <span className="text-red-400 font-semibold">{partnerName}</span>!  
        Here you can manage your restaurant listings and delivery services.  
        Choose an option below to get started.
      </p>

      {/* Two Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        
        {/* Add Restaurants Box */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg p-8 text-center hover:scale-105 transition-transform cursor-pointer">
          <h2 className="text-2xl font-bold text-white mb-4">Add Restaurants</h2>
          <p className="text-gray-300 mb-6">
            Manage your restaurant listings, update menus, and keep your customers engaged.
          </p>
          <button className="px-6 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition">
            <Link to = '/partner/addRestaurant'>
            Go to Restaurants
            </Link>
          </button>
        </div>

        {/* Add for Delivery Box */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg p-8 text-center hover:scale-105 transition-transform cursor-pointer">
          <h2 className="text-2xl font-bold text-white mb-4">Add for Delivery</h2>
          <p className="text-gray-300 mb-6">
            Manage delivery services, track orders, and expand your reach.
          </p>
          <button className="px-6 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition">
            <Link to= '/partner/addDelivery'>
            Go to Delivery
            </Link>
          </button>
        </div>

      </div>
    </div>
  );
};

export default PartnerDashboardCreate;