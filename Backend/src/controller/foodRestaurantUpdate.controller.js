const jwt = require('jsonwebtoken');
const foodRestaurantModel = require('../models/foodRestaurentDiningOut.model');

// ================== FOOD RESTAURANT UPDATE ==================
async function foodRestaurantUpdate(req, res) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
    try {
        // Verify JWT and extract partner ID
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const partnerId = decoded.id;
        const restaurantId = req.params.id;   // ✅ use :id from route
        const updateData = req.body;
        // Update the food restaurant record belonging to this partner
        const updatedRestaurant = await foodRestaurantModel.findOneAndUpdate(
            { _id: restaurantId, foodPartnerId: partnerId }, // ✅ match both ID and partner
            updateData,
            { new: true, runValidators: true }
        );  
        if (!updatedRestaurant) {
            return res.status(404).json({ message: 'Food restaurant record not found' });
        }
        res.status(200).json({
            message: 'Food restaurant updated successfully',
            restaurant: updatedRestaurant
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }   
}

module.exports = foodRestaurantUpdate;