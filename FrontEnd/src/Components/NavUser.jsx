import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const majorCities = [
  "Mumbai", "Delhi", "Banglore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad",
  "Jaipur", "Udaipur", "Jodhpur", "Kota", "Lucknow", "Kanpur", "Varanasi", "Agra",
  "Indore", "Bhopal", "Nagpur", "Surat", "Vadodara", "Rajkot", "Patna", "Ranchi",
  "Bhubaneswar", "Cuttack", "Raipur", "Chandigarh", "Amritsar", "Ludhiana", "Guwahati",
  "Shillong", "Kochi", "Thiruvananthapuram"
];

const NavUser = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  const { city } = useParams();
  const navigate = useNavigate();

  const handleCityChange = (e) => {
    const chosenCity = e.target.value;
    setSelectedCity(chosenCity);
    if (chosenCity) {
      navigate(`/user/${chosenCity}`); // ✅ navigate to /user/:city
    }
  };

  const breadcrumbCity = selectedCity || city || "Select City";

  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-800 backdrop-blur-lg border-b border-white/20 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">

        {/* Top Row */}
        <div className="flex items-center justify-between">
          {/* Links */}
          <ul className="hidden md:flex gap-8 text-white font-semibold tracking-wide">
            <li><Link to="/explore" className="hover:text-red-400 transition">Explore</Link></li>
            <li><Link to="/restaurants" className="hover:text-red-400 transition">Restaurants</Link></li>
            <li><Link to="/offers" className="hover:text-red-400 transition">Offers</Link></li>
          </ul>

          {/* User Menu */}
          <div className="hidden md:flex md:items-center relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <span className="text-white hover:text-red-400 transition">Sanchit ▾</span>
            </button>

            {userMenuOpen && (
              <div className="absolute right-0 mt-3 w-52 bg-gray-900/90 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 animate-fadeIn">
                <Link to="/dashboard" className="block px-4 py-2 text-white hover:bg-red-500/40 transition">📊 Dashboard</Link>
                <Link to="/profile" className="block px-4 py-2 text-white hover:bg-red-500/40 transition">👤 Profile</Link>
                <Link to="/settings" className="block px-4 py-2 text-white hover:bg-red-500/40 transition">⚙️ Settings</Link>
                <button className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-600/40 transition">
                  🚪 Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </div>
        </div>

        {/* Breadcrumb + City Selector */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-white">
          <div className="text-gray-300 md:flex-1">
            <Link to="/">Home</Link> / <Link to="/">India</Link> /{" "}
            <span className="text-white font-semibold">{breadcrumbCity}</span> /{" "}
            <span className="text-white font-semibold">Restaurants</span>
          </div>

          <div className="flex justify-center md:justify-end gap-6 md:flex-1 items-center">
            <select
              value={selectedCity}
              onChange={handleCityChange}
              className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select City</option>
              {majorCities.map((cityName, idx) => (
                <option key={idx} value={cityName}>{cityName}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/90 backdrop-blur-lg border-t border-white/20 px-6 py-4 rounded-lg shadow-lg">
            <ul className="flex flex-col gap-4 text-white font-medium">
              <li><Link to="/explore" className="hover:text-red-400 transition">Explore</Link></li>
              <li><Link to="/restaurants" className="hover:text-red-400 transition">Restaurants</Link></li>
              <li><Link to="/offers" className="hover:text-red-400 transition">Offers</Link></li>
              <li><Link to="/dashboard" className="hover:text-red-400 transition">Dashboard</Link></li>
              <li><Link to="/profile" className="hover:text-red-400 transition">Profile</Link></li>
              <li><Link to="/settings" className="hover:text-red-400 transition">Settings</Link></li>
              <li><button className="text-left text-red-400 hover:text-red-600 transition">Logout</button></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavUser;