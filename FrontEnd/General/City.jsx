import React from 'react';
import { Link } from 'react-router-dom';

const majorCities = [
  'Agra', 'Ahmedabad', 'Ajmer', 'Alappuzha', 'Allahabad', 'Amravati', 'Amritsar', 'Aurangabad',
  'Bengaluru', 'Bhopal', 'Bhubaneswar', 'Chandigarh', 'Chennai', 'Coimbatore', 'Delhi', 'Dehradun',
  'Faridabad', 'Ghaziabad', 'Goa', 'Guwahati', 'Hyderabad', 'Indore', 'Jaipur', 'Jammu',
  'Jamshedpur', 'Kanpur', 'Kochi', 'Kolkata', 'Lucknow', 'Ludhiana', 'Madurai', 'Mangalore',
  'Meerut', 'Mumbai', 'Mysuru', 'Nagpur', 'Nashik', 'Noida', 'Patna', 'Pune', 'Raipur',
  'Rajkot', 'Ranchi', 'Surat', 'Thane', 'Tiruchirappalli', 'Udaipur', 'Vadodara', 'Varanasi',
  'Vijayawada', 'Visakhapatnam'
].sort();

const Citys = () => {
  return (
    <div className="px-6 py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-6 text-center drop-shadow-md">
        Popular locations in 🇮🇳 India
      </h2>

      {/* Description */}
      <p className="text-center max-w-3xl mx-auto mb-14 text-lg text-gray-300">
        From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food,
        TasteOrbit covers it all. Explore menus, photos, and reviews from users just like you,
        to find your next great meal.
      </p>

      {/* City Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {majorCities.map((city) => (
          <Link to={`/city/${city}/restaurants`} key={city}>
            <div
              key={city}
              className="w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 text-center cursor-pointer 
                       hover:bg-white/20 hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <p className="text-base font-semibold text-white drop-shadow-sm">
                {city} Restaurants
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Citys;