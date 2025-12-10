const jwt = require('jsonwebtoken');
const foodRestaurantDeliveryModel = require('../models/foodRestaurantDelivery.model');

async function foodDeliveryAdd(req, res) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Please login first' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Extract data from request body
        const { fullName, address, priceStartingFrom, imageUrl, cuisineType, rating,city } = req.body;

        // Create new food delivery entry
        const foodDelivery = await foodRestaurantDeliveryModel.create({
            fullName,
            address,
            priceStartingFrom,
            imageUrl,
            cuisineType,
            rating,
            city,
            createdBy: decoded.id, // optional: link to user
            foodPartnerId: req.foodPartner._id
        });

        // Send success response
        return res.status(201).json({
            message: 'Food delivery added successfully',
            data: foodDelivery
        });

    } catch (error) {
        console.error("FoodDeliveryAdd Error:", error);
        console.error("Error name:", error.name);
        console.error("Error message:", error.message);
        console.error("Error stack:", error.stack);
        return res.status(500).json({
            message: 'Server error',
            error: error.message || 'Unknown error'
        });
    }
}

module.exports = foodDeliveryAdd;