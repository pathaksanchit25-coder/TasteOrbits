import React, { useEffect, useState } from "react";
import Navbar from "../../General/Navbar"; 
import axios from "axios";

const RestaurantPage = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/create/partner/addDelivery");

        // If API returns an object, convert it to array
        // Example: { "1": {...}, "2": {...} }
        const data = response.data;

        // If it's already an array, just set it
        if (Array.isArray(data)) {
          setRestaurants(data);
        } else {
          // Convert object values to array
          setRestaurants(Object.values(data));
        }
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div className="bg-black min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="px-6 py-10">
        <h1 className="text-3xl font-bold text-white mb-8">Top Restaurants</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((res, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              {/* Image */}
              <img
                src={res.image}
                alt={res.name}
                className="w-full h-48 object-cover"
              />

              {/* Details */}
              <div className="p-6 text-white">
                <h2 className="text-xl font-semibold mb-2">{res.name}</h2>
                <p className="text-gray-300">{res.address}</p>
                <p className="text-gray-400">City: {res.city}</p>
                <p className="text-gray-400">Cuisines: {res.cuisines}</p>
                <p className="text-gray-400">Average Cost: {res.avgCost}</p>
                <p className="text-yellow-400 font-medium">⭐ {res.rating}</p>
                <p className="text-gray-400">Opening Times: {res.openingTimes}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;