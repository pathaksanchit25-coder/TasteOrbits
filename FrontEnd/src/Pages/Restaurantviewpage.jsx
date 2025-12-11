import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RestaurantViewPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  const restaurantData = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3000/api/restaurantData/foodrestaurantcard',
        { withCredentials: true }
      );
      console.log("Fetched restaurants:", response.data);

      const data = response.data?.foodRestaurantCardData;
      setRestaurants(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setRestaurants([]);
    } finally {
      setLoading(false);
    }
  };

  // Delete restaurant


  // Update restaurant (basic example: navigate or inline edit)
  const handleUpdate = (id) => {
    // For now, just log or navigate to update page
    console.log("Update restaurant with id:", id);
    // Example: navigate to update form
    // navigate(`/update-restaurant/${id}`);
  };

  useEffect(() => {
    restaurantData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
        Your Restaurants
      </h1>

      {loading ? (
        <p className="text-center text-gray-300">Loading restaurants...</p>
      ) : restaurants.length === 0 ? (
        <p className="text-center text-gray-400">No restaurants found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant._id}
              className="rounded-2xl shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={
                  restaurant.imageUrl ||
                  'https://via.placeholder.com/400x250.png?text=No+Image'
                }
                alt={restaurant.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-white mb-1">
                  {restaurant.name}
                </h2>
                <p className="text-gray-300 text-sm mb-2">
                  {Array.isArray(restaurant.cuisineType)
                    ? restaurant.cuisineType.join(', ')
                    : restaurant.cuisineType}
                </p>
                <p className="text-gray-400 text-sm">📍 {restaurant.city}</p>
                <p className="text-yellow-400 font-semibold mt-3">
                  ⭐ {restaurant.rating || 'N/A'}
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  📞 {restaurant.contactNumber}
                </p>

                {/* Action buttons */}
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => handleUpdate(restaurant._id)}
                    className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-transform hover:scale-105"
                  >
                    Update
                  </button>
                  <button
                    
                    className="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition-transform hover:scale-105"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantViewPage;