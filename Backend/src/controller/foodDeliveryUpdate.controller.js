const jwt = require('jsonwebtoken');
const foodDeliveryModel = require('../models/foodRestaurantDelivery.model');

// ================== FOOD DELIVERY UPDATE ==================
async function foodDeliveryUpdate(req, res) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    try {
        // Verify JWT and extract partner ID
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const partnerId = decoded.id;

        const deliveryId = req.params.id;   // ✅ use :id from route
        const updateData = req.body;

        // Update the food delivery record belonging to this partner
        const updatedDelivery = await foodDeliveryModel.findOneAndUpdate(
            { _id: deliveryId, foodPartnerId: partnerId }, // ✅ match both ID and partner
            updateData,
            { new: true, runValidators: true }
        );

        if (!updatedDelivery) {
            return res.status(404).json({ message: 'Food delivery record not found' });
        }

        res.status(200).json({
            message: 'Food delivery updated successfully',
            delivery: updatedDelivery
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

module.exports = foodDeliveryUpdate;