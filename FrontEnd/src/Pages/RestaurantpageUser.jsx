import React, { useState } from "react";
import Navbar from "../../General/Navbar";

const RestaurantPage = () => {
  // Sample static restaurant data with contact numbers
  const [restaurants] = useState([
    {
      name: "Spice Garden",
      address: "Sector 5, Panvel",
      city: "Panvel",
      cuisines: "Indian, Chinese",
      avgCost: "₹800",
      rating: 4.3,
      openingTimes: "11:00 AM - 11:00 PM",
      contactNo: "+91 98765 43210",
      image: "https://images.unsplash.com/photo-1765202665764-ca839162fe4a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
     {
      name: "Spice Garden",
      address: "Sector 5, Panvel",
      city: "Panvel",
      cuisines: "Indian, Chinese",
      avgCost: "₹800",
      rating: 4.3,
      openingTimes: "11:00 AM - 11:00 PM",
      contactNo: "+91 98765 43210",
      image: "https://images.unsplash.com/photo-1765202665764-ca839162fe4a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
     {
      name: "Spice Garden",
      address: "Sector 5, Panvel",
      city: "Panvel",
      cuisines: "Indian, Chinese",
      avgCost: "₹800",
      rating: 4.3,
      openingTimes: "11:00 AM - 11:00 PM",
      contactNo: "+91 98765 43210",
      image: "https://images.unsplash.com/photo-1765202665764-ca839162fe4a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
     {
      name: "Spice Garden",
      address: "Sector 5, Panvel",
      city: "Panvel",
      cuisines: "Indian, Chinese",
      avgCost: "₹800",
      rating: 4.3,
      openingTimes: "11:00 AM - 11:00 PM",
      contactNo: "+91 98765 43210",
      image: "https://images.unsplash.com/photo-1765202665764-ca839162fe4a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
     {
      name: "Spice Garden",
      address: "Sector 5, Panvel",
      city: "Panvel",
      cuisines: "Indian, Chinese",
      avgCost: "₹800",
      rating: 4.3,
      openingTimes: "11:00 AM - 11:00 PM",
      contactNo: "+91 98765 43210",
      image: "https://images.unsplash.com/photo-1765202665764-ca839162fe4a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Urban Tandoor",
      address: "MG Road, Pune",
      city: "Pune",
      cuisines: "North Indian, Mughlai",
      avgCost: "₹1200",
      rating: 4.6,
      openingTimes: "12:00 PM - 12:00 AM",
      contactNo: "+91 91234 56789",
      image: "https://images.unsplash.com/photo-1765371512336-99c2b1c6975f?q=80&w=1133&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Coastal Flavors",
      address: "Marine Drive, Mumbai",
      city: "Mumbai",
      cuisines: "Seafood, Konkan",
      avgCost: "₹1000",
      rating: 4.5,
      openingTimes: "10:30 AM - 10:30 PM",
      contactNo: "+91 99887 66554",
      image: "https://images.unsplash.com/photo-1764818958908-d5efcec563d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen">
      {/* Static Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="px-6 py-12">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 mb-12 text-center">
          Top Restaurants
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {restaurants.map((res, index) => (
            <div
              key={index}
              className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image with gradient overlay */}
              <div className="relative">
                <img
                  src={res.image}
                  alt={res.name}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white drop-shadow-lg">
                  {res.name}
                </h2>
              </div>

              {/* Details */}
              <div className="p-6 text-gray-200">
                <p className="text-sm text-gray-400 mb-1">{res.address}</p>
                <p className="text-sm text-gray-400 mb-1">City: {res.city}</p>
                <p className="text-sm text-gray-400 mb-1">Cuisines: {res.cuisines}</p>
                <p className="text-sm text-gray-400 mb-1">Average Cost: {res.avgCost}</p>
                <p className="text-yellow-400 font-semibold mb-1">⭐ {res.rating}</p>
                <p className="text-sm text-gray-400 mb-1">Opening Times: {res.openingTimes}</p>
                <p className="text-sm text-gray-300 font-medium">📞 Contact: {res.contactNo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;