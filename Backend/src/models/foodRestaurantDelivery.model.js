const mongoose = require('mongoose');

const foodRestaurantDelivery = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true,
    index: true
  }
  ,
  priceStartingFrom: {
    type: Number,
    required: true,
    min: 0
  },
  imageUrl: {
    type: String,
    required: true
  },
  foodPartnerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'foodPartner',
    required: true,
    index: true
  },
  cuisineType: {
    type: [String],
    default: []
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const foodRestaurantDeliveryModel = mongoose.model('foodRestaurant', foodRestaurantDelivery);
module.exports = foodRestaurantDeliveryModel;