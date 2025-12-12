import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserRestaurantViewPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { city } = useParams();
  const activeCity = city || "Mumbai"; // ✅ Default to Mumbai

  const fetchRestaurants = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/resturantdatauser/data");

      // Defensive check: handle both array and object responses
      const data = Array.isArray(response.data)
        ? response.data
        : response.data.foodRestaurantCardData || [];

      setRestaurants(data);
      setError(null);
    } catch (err) {
      console.error("Error fetching restaurant data:", err);
      setError("Failed to fetch restaurants. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, [activeCity]);

  if (loading) {
    return <p className="text-center text-gray-400 mt-10">Fetching restaurants...</p>;
  }

  if (error) {
    return <p className="text-center text-red-400 mt-10">{error}</p>;
  }

  // Filter restaurants by activeCity
  const filteredRestaurants = restaurants.filter(
    (res) => res.city?.toLowerCase() === activeCity.toLowerCase()
  );

  if (filteredRestaurants.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-10">
        No restaurants found in {activeCity}.
      </p>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen">
      <div className="px-6 py-12">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 mb-12 text-center">
          Top Restaurants in {activeCity}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredRestaurants.map((res) => (
            <div
              key={res._id}
              className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image with gradient overlay */}
              <div className="relative">
                <img
                  src={res.imageUrl || res.image}
                  alt={res.name}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white drop-shadow-lg">
                  {res.name}
                </h2>
              </div>

              {/* Card content */}
              <div className="p-6 text-gray-200">
                <p className="text-sm text-gray-400 mb-1">{res.address}</p>
                <p className="text-sm text-gray-400 mb-1">City: {res.city}</p>
                <p className="text-sm text-gray-400 mb-1">
                  Cuisines: {Array.isArray(res.cuisineType) ? res.cuisineType.join(", ") : res.cuisines}
                </p>
                <p className="text-sm text-gray-400 mb-1">
                  Average Cost: ₹{res.averageCostForTwo || res.avgCost}
                </p>
                <p className="text-yellow-400 font-semibold mb-1">⭐ {res.rating}</p>
                <p className="text-sm text-gray-400 mb-1">Opening Times: {res.openingTime || res.openingTimes}</p>
                <p className="text-sm text-gray-300 font-medium">📞 Contact: {res.contactNumber || res.contactNo}</p>

                <button className="mt-4 px-4 py-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-lg hover:opacity-90 transition">
                  View Menu
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserRestaurantViewPage;