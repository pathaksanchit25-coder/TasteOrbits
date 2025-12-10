const jwt = require('jsonwebtoken');
const foodRestaurantModel = require('../models/foodRestaurentDiningOut.model');


async function foodRestaurantAdd(req, res) {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: 'Please Login First'
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const { name, address, averageCostForTwo, imageUrl, foodPartnerId, cuisineType, rating, openingTime,city } = req.body;

        const foodRestaurant = await foodRestaurantModel.create({
            name,
            address,
            averageCostForTwo,
            imageUrl,
            foodPartnerId:decoded.id,
            cuisineType,
            rating,
            openingTime,
            city
        });

        return res.status(201).json({
            message: 'Food Restaurant added successfully',
            data: foodRestaurant,
            city:foodRestaurant.city,
            id: foodRestaurant._id
        });
    } catch (error) {

        return res.status(500).json({
            message: 'Server error',
            error: error.message || 'Unknown error'
        });
    }
}


module.exports = foodRestaurantAdd;
