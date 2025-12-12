const foodRestaurantModel = require('../models/foodRestaurentDiningOut.model');


const foodRestaurantDataUser = async (req, res) => {
    try {
        const restaurants = await foodRestaurantModel.find({ isActive: true });
        res.status(200).json({ foodRestaurantCardData: restaurants });
    } catch (error) {
        console.error("Error fetching restaurant data:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = foodRestaurantDataUser ;