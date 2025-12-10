const mongoose = require('mongoose');
const foodRestaurantDiningOut = new mongoose.Schema({
    name: {
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
    averageCostForTwo: {
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
    city: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    openingTime: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const foodRestaurantDiningOutModel = mongoose.model('foodRestaurantDiningOut', foodRestaurantDiningOut);
module.exports = foodRestaurantDiningOutModel;