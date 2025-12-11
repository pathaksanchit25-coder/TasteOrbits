import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RestaurantAdd = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    averageCostForTwo: "",
    imageUrl: "",
    cuisineType: "",
    foodPartnerId: "",
    city: "",
    openingTime: "",
    contactNumber: ""   // ✅ Added contact number
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    const {
      name,
      address,
      averageCostForTwo,
      imageUrl,
      cuisineType,
      foodPartnerId,
      city,
      openingTime,
      contactNumber
    } = formData;

    try {
      const response = await axios.post(
        "http://localhost:3000/api/create/partner/addRestaurant",
        {
          name,
          address,
          averageCostForTwo,
          imageUrl,
          cuisineType: cuisineType.split(",").map((cuisine) => cuisine.trim()),
          foodPartnerId,
          city,
          openingTime,
          contactNumber   // ✅ Send contact number to backend
        },
        {
          withCredentials: true
        }
      );
      console.log("Restaurant added successfully:", response.data);
      alert("Restaurant added successfully!");
      navigate('/partner')
    } catch (error) {
      console.error("Error adding restaurant:", error);
      alert("Failed to add restaurant. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen flex items-center justify-center px-6 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 w-full max-w-lg text-white"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Add Restaurant</h2>

        {/* Restaurant Name */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Restaurant Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Enter restaurant name"
            required
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Enter address"
            required
          />
        </div>

        {/* Average Cost for Two */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Average Cost for Two</label>
          <input
            type="number"
            name="averageCostForTwo"
            value={formData.averageCostForTwo}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Enter cost"
            required
          />
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Enter image URL"
          />
        </div>

        {/* Cuisine Type */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Cuisine Type</label>
          <input
            type="text"
            name="cuisineType"
            value={formData.cuisineType}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="e.g. Indian, Italian"
            required
          />
        </div>

        {/* Food Partner ID */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Food Partner ID</label>
          <input
            type="text"
            name="foodPartnerId"
            value={formData.foodPartnerId}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Enter partner ID"
            required
          />
        </div>

        {/* City */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Enter city"
            required
          />
        </div>

        {/* Opening Time */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Opening Time</label>
          <input
            type="text"
            name="openingTime"
            value={formData.openingTime}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="e.g. 10:00 AM"
            required
          />
        </div>

        {/* Contact Number */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Contact Number</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="e.g. +91 98765 43210"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-6 py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition-transform hover:scale-105"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RestaurantAdd;