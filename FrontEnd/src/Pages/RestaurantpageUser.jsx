import React, { useEffect, useState } from "react";
import Navbar from "../../General/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";

const RestaurantpageUser = () => {
  const { city } = useParams();
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 loading state
  const [error, setError] = useState(null);     // 👈 error state

  const restaurantData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:3000/api/resturantdatauser/data"
      );

      console.log("Restaurant data:", response.data);

      const data =
        response.data.foodRestaurantCardData || response.data || [];

      const formatted = data.map((item) => ({
        name: item.name,
        address: item.address,
        city: item.city,
        cuisines: item.cuisineType?.join(", "),
        avgCost: `₹${item.averageCostForTwo}`,
        rating: item.rating,
        openingTimes: item.openingTime,
        contactNo: item.contactNumber,
        image: item.imageUrl,
      }));

      setRestaurants(formatted);
      setError(null);
    } catch (err) {
      console.error("Error fetching restaurant data:", err);
      setError("Failed to fetch restaurants. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    restaurantData();
  }, [city]);

  // Filter restaurants by city param
  const filteredRestaurants = restaurants.filter(
    (res) => res.city?.toLowerCase() === city?.toLowerCase()
  );

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen">
      <Navbar />

      <div className="px-6 py-12">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 mb-12 text-center">
          Top Restaurants in {city}
        </h1>

        {/* Loading state */}
        {loading && (
          <p className="text-center text-gray-400">Fetching restaurants...</p>
        )}

        {/* Error state */}
        {error && (
          <p className="text-center text-red-400">{error}</p>
        )}

        {/* Fallback if no restaurants */}
        {!loading && !error && filteredRestaurants.length === 0 && (
          <p className="text-center text-gray-400">
            No restaurants found in {city}.
          </p>
        )}

        {/* Restaurant cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredRestaurants.map((res, index) => (
            <div
              key={index}
              className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
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

export default RestaurantpageUser;