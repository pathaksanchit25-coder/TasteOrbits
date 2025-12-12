// Navbar.jsx
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const majorCities = [
  // Tier-1 Metros
  "Mumbai", "Delhi", "Banglore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad",

  // Rajasthan
  "Jaipur", "Udaipur", "Jodhpur", "Kota",

  // Karnataka
  "Bengaluru", "Mysuru", "Mangalore", "Hubli",

  // Uttar Pradesh
  "Lucknow", "Kanpur", "Varanasi", "Agra", "Noida", "Ghaziabad", "Meerut", "Prayagraj",

  // Madhya Pradesh
  "Bhopal", "Indore", "Jabalpur", "Gwalior",

  // Maharashtra
  "Nagpur", "Nashik", "Aurangabad", "Thane",

  // Punjab
  "Chandigarh", "Amritsar", "Ludhiana", "Patiala",

  // Gujarat
  "Surat", "Vadodara", "Rajkot", "Bhavnagar",

  // Bihar & Jharkhand
  "Patna", "Gaya", "Muzaffarpur", "Ranchi", "Jamshedpur", "Dhanbad",

  // Odisha & Chhattisgarh
  "Bhubaneswar", "Cuttack", "Rourkela", "Raipur", "Bilaspur",

  // West Bengal & North-East
  "Kolkata", "Siliguri", "Darjeeling", "Guwahati", "Shillong", "Imphal", "Aizawl", "Agartala", "Kohima", "Itanagar",

  // Tamil Nadu & Kerala
  "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem",
  "Thiruvananthapuram", "Kochi", "Kozhikode",

  // Haryana & Himachal
  "Faridabad", "Gurgaon", "Panipat", "Hisar",
  "Shimla", "Solan", "Dharamshala",

  // Jammu & Kashmir, Ladakh
  "Srinagar", "Jammu", "Leh", "Kargil",

  // Andhra Pradesh & Telangana
  "Hyderabad", "Warangal", "Vijayawada", "Visakhapatnam", "Tirupati",

  // Other Capitals
  "Dehradun", "Gangtok", "Port Blair", "Pondicherry", "Chandigarh"
];;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  const navigate = useNavigate();
  const { city, tab } = useParams();

  const activeTab = tab?.toLowerCase() === "delivery" ? "Delivery" : "Restaurants";

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      setFilteredCities(
        majorCities.filter((c) =>
          c.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredCities([]);
    }
  };

  const handleTabClick = (tabName) => {
    navigate(`/city/${city}/${tabName.toLowerCase()}`);
  };

  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-800 backdrop-blur-lg border-b border-white/20 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">

        {/* Top Row */}
        <div className="flex items-center justify-between">
          {/* Nav Links */}
          <ul className="hidden md:flex gap-8 text-white font-semibold tracking-wide">
            <li><Link to="/" className="hover:text-red-400 transition">Home</Link></li>
            <li><Link to="/partners" className="hover:text-red-400 transition">Partners</Link></li>
            <li><Link to="/about" className="hover:text-red-400 transition">About</Link></li>
          </ul>

          {/* Search Input */}
          <div className="relative w-48 md:w-64">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder={city ? city : "Search city..."}
              className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            {filteredCities.length > 0 && (
              <ul className="absolute left-0 right-0 mt-2 bg-gray-900/90 backdrop-blur-lg border border-white/20 rounded-lg shadow-xl text-white max-h-60 overflow-y-auto z-50">
                {filteredCities.map((c) => (
                  <li
                    key={c}
                    className="px-4 py-2 hover:bg-red-500/40 cursor-pointer transition"
                    onClick={() => {
                      setSearchTerm("");
                      setFilteredCities([]);
                      navigate(`/city/${c}/${activeTab.toLowerCase()}`);
                    }}
                  >
                    {c}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex gap-4">
            <Link to="/login" className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition">Log In</Link>
            <Link to="/register" className="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold shadow-md hover:bg-red-600 transition">Sign Up</Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </div>
        </div>

        {/* Breadcrumb + Toggle Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-white">
          <div className="text-gray-300 md:flex-1">
            <Link to='/'>Home</Link> / <Link to='/'>India</Link> /
            <span className="text-white font-semibold">{city} {activeTab}</span>
          </div>

          <div className="flex justify-center md:justify-end gap-6 md:flex-1">
            <button
              onClick={() => handleTabClick("Restaurants")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full transition ${activeTab === "Restaurants"
                ? "bg-red-500 text-white shadow-md"
                : "bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20"}`}
            >
              <i className="ri-restaurant-line text-lg"></i> Restaurants
            </button>
            <button
              onClick={() => handleTabClick("Delivery")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full transition ${activeTab === "Delivery"
                ? "bg-red-500 text-white shadow-md"
                : "bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20"}`}
            >
              <i className="ri-motorbike-line text-lg"></i> Delivery
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/90 backdrop-blur-lg border-t border-white/20 px-6 py-4 rounded-lg shadow-lg">
            <ul className="flex flex-col gap-4 text-white font-medium">
              <li><Link to="/" className="hover:text-red-400 transition">Home</Link></li>
              <li><Link to={`/city/${city}/restaurants`} className="hover:text-red-400 transition">Restaurants</Link></li>
              <li><Link to="/partners" className="hover:text-red-400 transition">Partners</Link></li>
              <li><Link to="/about" className="hover:text-red-400 transition">About</Link></li>
              <li><Link to="/login" className="hover:text-red-400 transition">Log In</Link></li>
              <li><Link to="/register" className="hover:text-red-400 transition">Sign Up</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;